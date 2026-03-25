const epsilon = 1.1102230246251565e-16;
const splitter = 134217729;
const resulterrbound = (3 + 8 * epsilon) * epsilon;

// fast_expansion_sum_zeroelim routine from original code
function sum(elen, e, flen, f, h) {
    let Q, Qnew, hh, bvirt;
    let enow = e[0];
    let fnow = f[0];
    let eindex = 0;
    let findex = 0;
    if ((fnow > enow) === (fnow > -enow)) {
        Q = enow;
        enow = e[++eindex];
    } else {
        Q = fnow;
        fnow = f[++findex];
    }
    let hindex = 0;
    if (eindex < elen && findex < flen) {
        if ((fnow > enow) === (fnow > -enow)) {
            Qnew = enow + Q;
            hh = Q - (Qnew - enow);
            enow = e[++eindex];
        } else {
            Qnew = fnow + Q;
            hh = Q - (Qnew - fnow);
            fnow = f[++findex];
        }
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        while (eindex < elen && findex < flen) {
            if ((fnow > enow) === (fnow > -enow)) {
                Qnew = Q + enow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (enow - bvirt);
                enow = e[++eindex];
            } else {
                Qnew = Q + fnow;
                bvirt = Qnew - Q;
                hh = Q - (Qnew - bvirt) + (fnow - bvirt);
                fnow = f[++findex];
            }
            Q = Qnew;
            if (hh !== 0) {
                h[hindex++] = hh;
            }
        }
    }
    while (eindex < elen) {
        Qnew = Q + enow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (enow - bvirt);
        enow = e[++eindex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    while (findex < flen) {
        Qnew = Q + fnow;
        bvirt = Qnew - Q;
        hh = Q - (Qnew - bvirt) + (fnow - bvirt);
        fnow = f[++findex];
        Q = Qnew;
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}

function sum_three(alen, a, blen, b, clen, c, tmp, out) {
    return sum(sum(alen, a, blen, b, tmp), tmp, clen, c, out);
}

// scale_expansion_zeroelim routine from oritinal code
function scale(elen, e, b, h) {
    let Q, sum, hh, product1, product0;
    let bvirt, c, ahi, alo, bhi, blo;

    c = splitter * b;
    bhi = c - (c - b);
    blo = b - bhi;
    let enow = e[0];
    Q = enow * b;
    c = splitter * enow;
    ahi = c - (c - enow);
    alo = enow - ahi;
    hh = alo * blo - (Q - ahi * bhi - alo * bhi - ahi * blo);
    let hindex = 0;
    if (hh !== 0) {
        h[hindex++] = hh;
    }
    for (let i = 1; i < elen; i++) {
        enow = e[i];
        product1 = enow * b;
        c = splitter * enow;
        ahi = c - (c - enow);
        alo = enow - ahi;
        product0 = alo * blo - (product1 - ahi * bhi - alo * bhi - ahi * blo);
        sum = Q + product0;
        bvirt = sum - Q;
        hh = Q - (sum - bvirt) + (product0 - bvirt);
        if (hh !== 0) {
            h[hindex++] = hh;
        }
        Q = product1 + sum;
        hh = sum - (Q - product1);
        if (hh !== 0) {
            h[hindex++] = hh;
        }
    }
    if (Q !== 0 || hindex === 0) {
        h[hindex++] = Q;
    }
    return hindex;
}

function estimate(elen, e) {
    let Q = e[0];
    for (let i = 1; i < elen; i++) Q += e[i];
    return Q;
}

function vec(n) {
    return new Float64Array(n);
}

const ccwerrboundA = (3 + 16 * epsilon) * epsilon;
const ccwerrboundB = (2 + 12 * epsilon) * epsilon;
const ccwerrboundC = (9 + 64 * epsilon) * epsilon * epsilon;

const B = vec(4);
const C1 = vec(8);
const C2 = vec(12);
const D = vec(16);
const u$2 = vec(4);

function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
    let acxtail, acytail, bcxtail, bcytail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    const acx = ax - cx;
    const bcx = bx - cx;
    const acy = ay - cy;
    const bcy = by - cy;

    s1 = acx * bcy;
    c = splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcx;
    c = splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    B[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    B[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    B[2] = _j - (u3 - bvirt) + (_i - bvirt);
    B[3] = u3;

    let det = estimate(4, B);
    let errbound = ccwerrboundB * detsum;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - acx;
    acxtail = ax - (acx + bvirt) + (bvirt - cx);
    bvirt = bx - bcx;
    bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
    bvirt = ay - acy;
    acytail = ay - (acy + bvirt) + (bvirt - cy);
    bvirt = by - bcy;
    bcytail = by - (bcy + bvirt) + (bvirt - cy);

    if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) {
        return det;
    }

    errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
    det += (acx * bcytail + bcy * acxtail) - (acy * bcxtail + bcx * acytail);
    if (det >= errbound || -det >= errbound) return det;

    s1 = acxtail * bcy;
    c = splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = splitter * bcy;
    bhi = c - (c - bcy);
    blo = bcy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcx;
    c = splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = splitter * bcx;
    bhi = c - (c - bcx);
    blo = bcx - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u$2[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u$2[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u$2[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u$2[3] = u3;
    const C1len = sum(4, B, 4, u$2, C1);

    s1 = acx * bcytail;
    c = splitter * acx;
    ahi = c - (c - acx);
    alo = acx - ahi;
    c = splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acy * bcxtail;
    c = splitter * acy;
    ahi = c - (c - acy);
    alo = acy - ahi;
    c = splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u$2[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u$2[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u$2[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u$2[3] = u3;
    const C2len = sum(C1len, C1, 4, u$2, C2);

    s1 = acxtail * bcytail;
    c = splitter * acxtail;
    ahi = c - (c - acxtail);
    alo = acxtail - ahi;
    c = splitter * bcytail;
    bhi = c - (c - bcytail);
    blo = bcytail - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = acytail * bcxtail;
    c = splitter * acytail;
    ahi = c - (c - acytail);
    alo = acytail - ahi;
    c = splitter * bcxtail;
    bhi = c - (c - bcxtail);
    blo = bcxtail - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    u$2[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    u$2[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    u$2[2] = _j - (u3 - bvirt) + (_i - bvirt);
    u$2[3] = u3;
    const Dlen = sum(C2len, C2, 4, u$2, D);

    return D[Dlen - 1];
}

function orient2d(ax, ay, bx, by, cx, cy) {
    const detleft = (ay - cy) * (bx - cx);
    const detright = (ax - cx) * (by - cy);
    const det = detleft - detright;

    const detsum = Math.abs(detleft + detright);
    if (Math.abs(det) >= ccwerrboundA * detsum) return det;

    return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
}

const o3derrboundA = (7 + 56 * epsilon) * epsilon;
const o3derrboundB = (3 + 28 * epsilon) * epsilon;
const o3derrboundC = (26 + 288 * epsilon) * epsilon * epsilon;

const bc$1 = vec(4);
const ca$1 = vec(4);
const ab$1 = vec(4);
const at_b = vec(4);
const at_c = vec(4);
const bt_c = vec(4);
const bt_a = vec(4);
const ct_a = vec(4);
const ct_b = vec(4);
const bct$1 = vec(8);
const cat$1 = vec(8);
const abt$1 = vec(8);
const u$1 = vec(4);

const _8$1 = vec(8);
const _8b = vec(8);
const _16$1 = vec(16);
const _12 = vec(12);

let fin$1 = vec(192);
let fin2$1 = vec(192);

function finadd$1(finlen, alen, a) {
    finlen = sum(finlen, fin$1, alen, a, fin2$1);
    const tmp = fin$1; fin$1 = fin2$1; fin2$1 = tmp;
    return finlen;
}

function tailinit(xtail, ytail, ax, ay, bx, by, a, b) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3, negate;
    if (xtail === 0) {
        if (ytail === 0) {
            a[0] = 0;
            b[0] = 0;
            return 1;
        }
        negate = -ytail;
        s1 = negate * ax;
        c = splitter * negate;
        ahi = c - (c - negate);
        alo = negate - ahi;
        c = splitter * ax;
        bhi = c - (c - ax);
        blo = ax - bhi;
        a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
        a[1] = s1;
        s1 = ytail * bx;
        c = splitter * ytail;
        ahi = c - (c - ytail);
        alo = ytail - ahi;
        c = splitter * bx;
        bhi = c - (c - bx);
        blo = bx - bhi;
        b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
        b[1] = s1;
        return 2;
    }
    if (ytail === 0) {
        s1 = xtail * ay;
        c = splitter * xtail;
        ahi = c - (c - xtail);
        alo = xtail - ahi;
        c = splitter * ay;
        bhi = c - (c - ay);
        blo = ay - bhi;
        a[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
        a[1] = s1;
        negate = -xtail;
        s1 = negate * by;
        c = splitter * negate;
        ahi = c - (c - negate);
        alo = negate - ahi;
        c = splitter * by;
        bhi = c - (c - by);
        blo = by - bhi;
        b[0] = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
        b[1] = s1;
        return 2;
    }
    s1 = xtail * ay;
    c = splitter * xtail;
    ahi = c - (c - xtail);
    alo = xtail - ahi;
    c = splitter * ay;
    bhi = c - (c - ay);
    blo = ay - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = ytail * ax;
    c = splitter * ytail;
    ahi = c - (c - ytail);
    alo = ytail - ahi;
    c = splitter * ax;
    bhi = c - (c - ax);
    blo = ax - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    a[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    a[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    a[2] = _j - (u3 - bvirt) + (_i - bvirt);
    a[3] = u3;
    s1 = ytail * bx;
    c = splitter * ytail;
    ahi = c - (c - ytail);
    alo = ytail - ahi;
    c = splitter * bx;
    bhi = c - (c - bx);
    blo = bx - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = xtail * by;
    c = splitter * xtail;
    ahi = c - (c - xtail);
    alo = xtail - ahi;
    c = splitter * by;
    bhi = c - (c - by);
    blo = by - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    b[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    b[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    b[2] = _j - (u3 - bvirt) + (_i - bvirt);
    b[3] = u3;
    return 4;
}

function tailadd(finlen, a, b, k, z) {
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _k, _0, s1, s0, u3;
    s1 = a * b;
    c = splitter * a;
    ahi = c - (c - a);
    alo = a - ahi;
    c = splitter * b;
    bhi = c - (c - b);
    blo = b - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    c = splitter * k;
    bhi = c - (c - k);
    blo = k - bhi;
    _i = s0 * k;
    c = splitter * s0;
    ahi = c - (c - s0);
    alo = s0 - ahi;
    u$1[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
    _j = s1 * k;
    c = splitter * s1;
    ahi = c - (c - s1);
    alo = s1 - ahi;
    _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
    _k = _i + _0;
    bvirt = _k - _i;
    u$1[1] = _i - (_k - bvirt) + (_0 - bvirt);
    u3 = _j + _k;
    u$1[2] = _k - (u3 - _j);
    u$1[3] = u3;
    finlen = finadd$1(finlen, 4, u$1);
    if (z !== 0) {
        c = splitter * z;
        bhi = c - (c - z);
        blo = z - bhi;
        _i = s0 * z;
        c = splitter * s0;
        ahi = c - (c - s0);
        alo = s0 - ahi;
        u$1[0] = alo * blo - (_i - ahi * bhi - alo * bhi - ahi * blo);
        _j = s1 * z;
        c = splitter * s1;
        ahi = c - (c - s1);
        alo = s1 - ahi;
        _0 = alo * blo - (_j - ahi * bhi - alo * bhi - ahi * blo);
        _k = _i + _0;
        bvirt = _k - _i;
        u$1[1] = _i - (_k - bvirt) + (_0 - bvirt);
        u3 = _j + _k;
        u$1[2] = _k - (u3 - _j);
        u$1[3] = u3;
        finlen = finadd$1(finlen, 4, u$1);
    }
    return finlen;
}

function orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail;
    let adytail, bdytail, cdytail;
    let adztail, bdztail, cdztail;
    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;

    s1 = bdx * cdy;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc$1[3] = u3;
    s1 = cdx * ady;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ca$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ca$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ca$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ca$1[3] = u3;
    s1 = adx * bdy;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab$1[3] = u3;

    finlen = sum(
        sum(
            scale(4, bc$1, adz, _8$1), _8$1,
            scale(4, ca$1, bdz, _8b), _8b, _16$1), _16$1,
        scale(4, ab$1, cdz, _8$1), _8$1, fin$1);

    let det = estimate(finlen, fin$1);
    let errbound = o3derrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    bvirt = az - adz;
    adztail = az - (adz + bvirt) + (bvirt - dz);
    bvirt = bz - bdz;
    bdztail = bz - (bdz + bvirt) + (bvirt - dz);
    bvirt = cz - cdz;
    cdztail = cz - (cdz + bvirt) + (bvirt - dz);

    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 &&
        adytail === 0 && bdytail === 0 && cdytail === 0 &&
        adztail === 0 && bdztail === 0 && cdztail === 0) {
        return det;
    }

    errbound = o3derrboundC * permanent + resulterrbound * Math.abs(det);
    det +=
        adz * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + adztail * (bdx * cdy - bdy * cdx) +
        bdz * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + bdztail * (cdx * ady - cdy * adx) +
        cdz * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + cdztail * (adx * bdy - ady * bdx);
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    const at_len = tailinit(adxtail, adytail, bdx, bdy, cdx, cdy, at_b, at_c);
    const bt_len = tailinit(bdxtail, bdytail, cdx, cdy, adx, ady, bt_c, bt_a);
    const ct_len = tailinit(cdxtail, cdytail, adx, ady, bdx, bdy, ct_a, ct_b);

    const bctlen = sum(bt_len, bt_c, ct_len, ct_b, bct$1);
    finlen = finadd$1(finlen, scale(bctlen, bct$1, adz, _16$1), _16$1);

    const catlen = sum(ct_len, ct_a, at_len, at_c, cat$1);
    finlen = finadd$1(finlen, scale(catlen, cat$1, bdz, _16$1), _16$1);

    const abtlen = sum(at_len, at_b, bt_len, bt_a, abt$1);
    finlen = finadd$1(finlen, scale(abtlen, abt$1, cdz, _16$1), _16$1);

    if (adztail !== 0) {
        finlen = finadd$1(finlen, scale(4, bc$1, adztail, _12), _12);
        finlen = finadd$1(finlen, scale(bctlen, bct$1, adztail, _16$1), _16$1);
    }
    if (bdztail !== 0) {
        finlen = finadd$1(finlen, scale(4, ca$1, bdztail, _12), _12);
        finlen = finadd$1(finlen, scale(catlen, cat$1, bdztail, _16$1), _16$1);
    }
    if (cdztail !== 0) {
        finlen = finadd$1(finlen, scale(4, ab$1, cdztail, _12), _12);
        finlen = finadd$1(finlen, scale(abtlen, abt$1, cdztail, _16$1), _16$1);
    }

    if (adxtail !== 0) {
        if (bdytail !== 0) {
            finlen = tailadd(finlen, adxtail, bdytail, cdz, cdztail);
        }
        if (cdytail !== 0) {
            finlen = tailadd(finlen, -adxtail, cdytail, bdz, bdztail);
        }
    }
    if (bdxtail !== 0) {
        if (cdytail !== 0) {
            finlen = tailadd(finlen, bdxtail, cdytail, adz, adztail);
        }
        if (adytail !== 0) {
            finlen = tailadd(finlen, -bdxtail, adytail, cdz, cdztail);
        }
    }
    if (cdxtail !== 0) {
        if (adytail !== 0) {
            finlen = tailadd(finlen, cdxtail, adytail, bdz, bdztail);
        }
        if (bdytail !== 0) {
            finlen = tailadd(finlen, -cdxtail, bdytail, adz, adztail);
        }
    }

    return fin$1[finlen - 1];
}

function orient3d(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;
    const adz = az - dz;
    const bdz = bz - dz;
    const cdz = cz - dz;

    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;

    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;

    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;

    const det =
        adz * (bdxcdy - cdxbdy) +
        bdz * (cdxady - adxcdy) +
        cdz * (adxbdy - bdxady);

    const permanent =
        (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * Math.abs(adz) +
        (Math.abs(cdxady) + Math.abs(adxcdy)) * Math.abs(bdz) +
        (Math.abs(adxbdy) + Math.abs(bdxady)) * Math.abs(cdz);

    const errbound = o3derrboundA * permanent;
    if (det > errbound || -det > errbound) {
        return det;
    }

    return orient3dadapt(ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, permanent);
}

const iccerrboundA = (10 + 96 * epsilon) * epsilon;
const iccerrboundB = (4 + 48 * epsilon) * epsilon;
const iccerrboundC = (44 + 576 * epsilon) * epsilon * epsilon;

const bc = vec(4);
const ca = vec(4);
const ab = vec(4);
const aa = vec(4);
const bb = vec(4);
const cc = vec(4);
const u = vec(4);
const v = vec(4);
const axtbc = vec(8);
const aytbc = vec(8);
const bxtca = vec(8);
const bytca = vec(8);
const cxtab = vec(8);
const cytab = vec(8);
const abt = vec(8);
const bct = vec(8);
const cat = vec(8);
const abtt = vec(4);
const bctt = vec(4);
const catt = vec(4);

const _8 = vec(8);
const _16 = vec(16);
const _16b = vec(16);
const _16c = vec(16);
const _32 = vec(32);
const _32b = vec(32);
const _48 = vec(48);
const _64 = vec(64);

let fin = vec(1152);
let fin2 = vec(1152);

function finadd(finlen, a, alen) {
    finlen = sum(finlen, fin, a, alen, fin2);
    const tmp = fin; fin = fin2; fin2 = tmp;
    return finlen;
}

function incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent) {
    let finlen;
    let adxtail, bdxtail, cdxtail, adytail, bdytail, cdytail;
    let axtbclen, aytbclen, bxtcalen, bytcalen, cxtablen, cytablen;
    let abtlen, bctlen, catlen;
    let abttlen, bcttlen, cattlen;
    let n1, n0;

    let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;

    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;

    s1 = bdx * cdy;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = cdx * bdy;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    bc[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    bc[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    bc[2] = _j - (u3 - bvirt) + (_i - bvirt);
    bc[3] = u3;
    s1 = cdx * ady;
    c = splitter * cdx;
    ahi = c - (c - cdx);
    alo = cdx - ahi;
    c = splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = adx * cdy;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = splitter * cdy;
    bhi = c - (c - cdy);
    blo = cdy - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ca[3] = u3;
    s1 = adx * bdy;
    c = splitter * adx;
    ahi = c - (c - adx);
    alo = adx - ahi;
    c = splitter * bdy;
    bhi = c - (c - bdy);
    blo = bdy - bhi;
    s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
    t1 = bdx * ady;
    c = splitter * bdx;
    ahi = c - (c - bdx);
    alo = bdx - ahi;
    c = splitter * ady;
    bhi = c - (c - ady);
    blo = ady - bhi;
    t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
    _i = s0 - t0;
    bvirt = s0 - _i;
    ab[0] = s0 - (_i + bvirt) + (bvirt - t0);
    _j = s1 + _i;
    bvirt = _j - s1;
    _0 = s1 - (_j - bvirt) + (_i - bvirt);
    _i = _0 - t1;
    bvirt = _0 - _i;
    ab[1] = _0 - (_i + bvirt) + (bvirt - t1);
    u3 = _j + _i;
    bvirt = u3 - _j;
    ab[2] = _j - (u3 - bvirt) + (_i - bvirt);
    ab[3] = u3;

    finlen = sum(
        sum(
            sum(
                scale(scale(4, bc, adx, _8), _8, adx, _16), _16,
                scale(scale(4, bc, ady, _8), _8, ady, _16b), _16b, _32), _32,
            sum(
                scale(scale(4, ca, bdx, _8), _8, bdx, _16), _16,
                scale(scale(4, ca, bdy, _8), _8, bdy, _16b), _16b, _32b), _32b, _64), _64,
        sum(
            scale(scale(4, ab, cdx, _8), _8, cdx, _16), _16,
            scale(scale(4, ab, cdy, _8), _8, cdy, _16b), _16b, _32), _32, fin);

    let det = estimate(finlen, fin);
    let errbound = iccerrboundB * permanent;
    if (det >= errbound || -det >= errbound) {
        return det;
    }

    bvirt = ax - adx;
    adxtail = ax - (adx + bvirt) + (bvirt - dx);
    bvirt = ay - ady;
    adytail = ay - (ady + bvirt) + (bvirt - dy);
    bvirt = bx - bdx;
    bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
    bvirt = by - bdy;
    bdytail = by - (bdy + bvirt) + (bvirt - dy);
    bvirt = cx - cdx;
    cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
    bvirt = cy - cdy;
    cdytail = cy - (cdy + bvirt) + (bvirt - dy);
    if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0) {
        return det;
    }

    errbound = iccerrboundC * permanent + resulterrbound * Math.abs(det);
    det += ((adx * adx + ady * ady) * ((bdx * cdytail + cdy * bdxtail) - (bdy * cdxtail + cdx * bdytail)) +
        2 * (adx * adxtail + ady * adytail) * (bdx * cdy - bdy * cdx)) +
        ((bdx * bdx + bdy * bdy) * ((cdx * adytail + ady * cdxtail) - (cdy * adxtail + adx * cdytail)) +
        2 * (bdx * bdxtail + bdy * bdytail) * (cdx * ady - cdy * adx)) +
        ((cdx * cdx + cdy * cdy) * ((adx * bdytail + bdy * adxtail) - (ady * bdxtail + bdx * adytail)) +
        2 * (cdx * cdxtail + cdy * cdytail) * (adx * bdy - ady * bdx));

    if (det >= errbound || -det >= errbound) {
        return det;
    }

    if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
        s1 = adx * adx;
        c = splitter * adx;
        ahi = c - (c - adx);
        alo = adx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = ady * ady;
        c = splitter * ady;
        ahi = c - (c - ady);
        alo = ady - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        aa[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        aa[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        aa[2] = _j - (u3 - bvirt) + (_i - bvirt);
        aa[3] = u3;
    }
    if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
        s1 = bdx * bdx;
        c = splitter * bdx;
        ahi = c - (c - bdx);
        alo = bdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = bdy * bdy;
        c = splitter * bdy;
        ahi = c - (c - bdy);
        alo = bdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        bb[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        bb[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        bb[2] = _j - (u3 - bvirt) + (_i - bvirt);
        bb[3] = u3;
    }
    if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
        s1 = cdx * cdx;
        c = splitter * cdx;
        ahi = c - (c - cdx);
        alo = cdx - ahi;
        s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
        t1 = cdy * cdy;
        c = splitter * cdy;
        ahi = c - (c - cdy);
        alo = cdy - ahi;
        t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
        _i = s0 + t0;
        bvirt = _i - s0;
        cc[0] = s0 - (_i - bvirt) + (t0 - bvirt);
        _j = s1 + _i;
        bvirt = _j - s1;
        _0 = s1 - (_j - bvirt) + (_i - bvirt);
        _i = _0 + t1;
        bvirt = _i - _0;
        cc[1] = _0 - (_i - bvirt) + (t1 - bvirt);
        u3 = _j + _i;
        bvirt = u3 - _j;
        cc[2] = _j - (u3 - bvirt) + (_i - bvirt);
        cc[3] = u3;
    }

    if (adxtail !== 0) {
        axtbclen = scale(4, bc, adxtail, axtbc);
        finlen = finadd(finlen, sum_three(
            scale(axtbclen, axtbc, 2 * adx, _16), _16,
            scale(scale(4, cc, adxtail, _8), _8, bdy, _16b), _16b,
            scale(scale(4, bb, adxtail, _8), _8, -cdy, _16c), _16c, _32, _48), _48);
    }
    if (adytail !== 0) {
        aytbclen = scale(4, bc, adytail, aytbc);
        finlen = finadd(finlen, sum_three(
            scale(aytbclen, aytbc, 2 * ady, _16), _16,
            scale(scale(4, bb, adytail, _8), _8, cdx, _16b), _16b,
            scale(scale(4, cc, adytail, _8), _8, -bdx, _16c), _16c, _32, _48), _48);
    }
    if (bdxtail !== 0) {
        bxtcalen = scale(4, ca, bdxtail, bxtca);
        finlen = finadd(finlen, sum_three(
            scale(bxtcalen, bxtca, 2 * bdx, _16), _16,
            scale(scale(4, aa, bdxtail, _8), _8, cdy, _16b), _16b,
            scale(scale(4, cc, bdxtail, _8), _8, -ady, _16c), _16c, _32, _48), _48);
    }
    if (bdytail !== 0) {
        bytcalen = scale(4, ca, bdytail, bytca);
        finlen = finadd(finlen, sum_three(
            scale(bytcalen, bytca, 2 * bdy, _16), _16,
            scale(scale(4, cc, bdytail, _8), _8, adx, _16b), _16b,
            scale(scale(4, aa, bdytail, _8), _8, -cdx, _16c), _16c, _32, _48), _48);
    }
    if (cdxtail !== 0) {
        cxtablen = scale(4, ab, cdxtail, cxtab);
        finlen = finadd(finlen, sum_three(
            scale(cxtablen, cxtab, 2 * cdx, _16), _16,
            scale(scale(4, bb, cdxtail, _8), _8, ady, _16b), _16b,
            scale(scale(4, aa, cdxtail, _8), _8, -bdy, _16c), _16c, _32, _48), _48);
    }
    if (cdytail !== 0) {
        cytablen = scale(4, ab, cdytail, cytab);
        finlen = finadd(finlen, sum_three(
            scale(cytablen, cytab, 2 * cdy, _16), _16,
            scale(scale(4, aa, cdytail, _8), _8, bdx, _16b), _16b,
            scale(scale(4, bb, cdytail, _8), _8, -adx, _16c), _16c, _32, _48), _48);
    }

    if (adxtail !== 0 || adytail !== 0) {
        if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
            s1 = bdxtail * cdy;
            c = splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = splitter * cdy;
            bhi = c - (c - cdy);
            blo = cdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * cdytail;
            c = splitter * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            s1 = cdxtail * -bdy;
            c = splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = splitter * -bdy;
            bhi = c - (c - -bdy);
            blo = -bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * -bdytail;
            c = splitter * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = splitter * -bdytail;
            bhi = c - (c - -bdytail);
            blo = -bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            bctlen = sum(4, u, 4, v, bct);
            s1 = bdxtail * cdytail;
            c = splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdxtail * bdytail;
            c = splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            bctt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            bctt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            bctt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            bctt[3] = u3;
            bcttlen = 4;
        } else {
            bct[0] = 0;
            bctlen = 1;
            bctt[0] = 0;
            bcttlen = 1;
        }
        if (adxtail !== 0) {
            const len = scale(bctlen, bct, adxtail, _16c);
            finlen = finadd(finlen, sum(
                scale(axtbclen, axtbc, adxtail, _16), _16,
                scale(len, _16c, 2 * adx, _32), _32, _48), _48);

            const len2 = scale(bcttlen, bctt, adxtail, _8);
            finlen = finadd(finlen, sum_three(
                scale(len2, _8, 2 * adx, _16), _16,
                scale(len2, _8, adxtail, _16b), _16b,
                scale(len, _16c, adxtail, _32), _32, _32b, _64), _64);

            if (bdytail !== 0) {
                finlen = finadd(finlen, scale(scale(4, cc, adxtail, _8), _8, bdytail, _16), _16);
            }
            if (cdytail !== 0) {
                finlen = finadd(finlen, scale(scale(4, bb, -adxtail, _8), _8, cdytail, _16), _16);
            }
        }
        if (adytail !== 0) {
            const len = scale(bctlen, bct, adytail, _16c);
            finlen = finadd(finlen, sum(
                scale(aytbclen, aytbc, adytail, _16), _16,
                scale(len, _16c, 2 * ady, _32), _32, _48), _48);

            const len2 = scale(bcttlen, bctt, adytail, _8);
            finlen = finadd(finlen, sum_three(
                scale(len2, _8, 2 * ady, _16), _16,
                scale(len2, _8, adytail, _16b), _16b,
                scale(len, _16c, adytail, _32), _32, _32b, _64), _64);
        }
    }
    if (bdxtail !== 0 || bdytail !== 0) {
        if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
            s1 = cdxtail * ady;
            c = splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = splitter * ady;
            bhi = c - (c - ady);
            blo = ady - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = cdx * adytail;
            c = splitter * cdx;
            ahi = c - (c - cdx);
            alo = cdx - ahi;
            c = splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            n1 = -cdy;
            n0 = -cdytail;
            s1 = adxtail * n1;
            c = splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = splitter * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * n0;
            c = splitter * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = splitter * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            catlen = sum(4, u, 4, v, cat);
            s1 = cdxtail * adytail;
            c = splitter * cdxtail;
            ahi = c - (c - cdxtail);
            alo = cdxtail - ahi;
            c = splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adxtail * cdytail;
            c = splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = splitter * cdytail;
            bhi = c - (c - cdytail);
            blo = cdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            catt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            catt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            catt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            catt[3] = u3;
            cattlen = 4;
        } else {
            cat[0] = 0;
            catlen = 1;
            catt[0] = 0;
            cattlen = 1;
        }
        if (bdxtail !== 0) {
            const len = scale(catlen, cat, bdxtail, _16c);
            finlen = finadd(finlen, sum(
                scale(bxtcalen, bxtca, bdxtail, _16), _16,
                scale(len, _16c, 2 * bdx, _32), _32, _48), _48);

            const len2 = scale(cattlen, catt, bdxtail, _8);
            finlen = finadd(finlen, sum_three(
                scale(len2, _8, 2 * bdx, _16), _16,
                scale(len2, _8, bdxtail, _16b), _16b,
                scale(len, _16c, bdxtail, _32), _32, _32b, _64), _64);

            if (cdytail !== 0) {
                finlen = finadd(finlen, scale(scale(4, aa, bdxtail, _8), _8, cdytail, _16), _16);
            }
            if (adytail !== 0) {
                finlen = finadd(finlen, scale(scale(4, cc, -bdxtail, _8), _8, adytail, _16), _16);
            }
        }
        if (bdytail !== 0) {
            const len = scale(catlen, cat, bdytail, _16c);
            finlen = finadd(finlen, sum(
                scale(bytcalen, bytca, bdytail, _16), _16,
                scale(len, _16c, 2 * bdy, _32), _32, _48), _48);

            const len2 = scale(cattlen, catt, bdytail, _8);
            finlen = finadd(finlen, sum_three(
                scale(len2, _8, 2 * bdy, _16), _16,
                scale(len2, _8, bdytail, _16b), _16b,
                scale(len, _16c, bdytail, _32), _32,  _32b, _64), _64);
        }
    }
    if (cdxtail !== 0 || cdytail !== 0) {
        if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
            s1 = adxtail * bdy;
            c = splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = splitter * bdy;
            bhi = c - (c - bdy);
            blo = bdy - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = adx * bdytail;
            c = splitter * adx;
            ahi = c - (c - adx);
            alo = adx - ahi;
            c = splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            u[2] = _j - (u3 - bvirt) + (_i - bvirt);
            u[3] = u3;
            n1 = -ady;
            n0 = -adytail;
            s1 = bdxtail * n1;
            c = splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = splitter * n1;
            bhi = c - (c - n1);
            blo = n1 - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdx * n0;
            c = splitter * bdx;
            ahi = c - (c - bdx);
            alo = bdx - ahi;
            c = splitter * n0;
            bhi = c - (c - n0);
            blo = n0 - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 + t0;
            bvirt = _i - s0;
            v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 + t1;
            bvirt = _i - _0;
            v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
            u3 = _j + _i;
            bvirt = u3 - _j;
            v[2] = _j - (u3 - bvirt) + (_i - bvirt);
            v[3] = u3;
            abtlen = sum(4, u, 4, v, abt);
            s1 = adxtail * bdytail;
            c = splitter * adxtail;
            ahi = c - (c - adxtail);
            alo = adxtail - ahi;
            c = splitter * bdytail;
            bhi = c - (c - bdytail);
            blo = bdytail - bhi;
            s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
            t1 = bdxtail * adytail;
            c = splitter * bdxtail;
            ahi = c - (c - bdxtail);
            alo = bdxtail - ahi;
            c = splitter * adytail;
            bhi = c - (c - adytail);
            blo = adytail - bhi;
            t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
            _i = s0 - t0;
            bvirt = s0 - _i;
            abtt[0] = s0 - (_i + bvirt) + (bvirt - t0);
            _j = s1 + _i;
            bvirt = _j - s1;
            _0 = s1 - (_j - bvirt) + (_i - bvirt);
            _i = _0 - t1;
            bvirt = _0 - _i;
            abtt[1] = _0 - (_i + bvirt) + (bvirt - t1);
            u3 = _j + _i;
            bvirt = u3 - _j;
            abtt[2] = _j - (u3 - bvirt) + (_i - bvirt);
            abtt[3] = u3;
            abttlen = 4;
        } else {
            abt[0] = 0;
            abtlen = 1;
            abtt[0] = 0;
            abttlen = 1;
        }
        if (cdxtail !== 0) {
            const len = scale(abtlen, abt, cdxtail, _16c);
            finlen = finadd(finlen, sum(
                scale(cxtablen, cxtab, cdxtail, _16), _16,
                scale(len, _16c, 2 * cdx, _32), _32, _48), _48);

            const len2 = scale(abttlen, abtt, cdxtail, _8);
            finlen = finadd(finlen, sum_three(
                scale(len2, _8, 2 * cdx, _16), _16,
                scale(len2, _8, cdxtail, _16b), _16b,
                scale(len, _16c, cdxtail, _32), _32, _32b, _64), _64);

            if (adytail !== 0) {
                finlen = finadd(finlen, scale(scale(4, bb, cdxtail, _8), _8, adytail, _16), _16);
            }
            if (bdytail !== 0) {
                finlen = finadd(finlen, scale(scale(4, aa, -cdxtail, _8), _8, bdytail, _16), _16);
            }
        }
        if (cdytail !== 0) {
            const len = scale(abtlen, abt, cdytail, _16c);
            finlen = finadd(finlen, sum(
                scale(cytablen, cytab, cdytail, _16), _16,
                scale(len, _16c, 2 * cdy, _32), _32, _48), _48);

            const len2 = scale(abttlen, abtt, cdytail, _8);
            finlen = finadd(finlen, sum_three(
                scale(len2, _8, 2 * cdy, _16), _16,
                scale(len2, _8, cdytail, _16b), _16b,
                scale(len, _16c, cdytail, _32), _32, _32b, _64), _64);
        }
    }

    return fin[finlen - 1];
}

function incircle(ax, ay, bx, by, cx, cy, dx, dy) {
    const adx = ax - dx;
    const bdx = bx - dx;
    const cdx = cx - dx;
    const ady = ay - dy;
    const bdy = by - dy;
    const cdy = cy - dy;

    const bdxcdy = bdx * cdy;
    const cdxbdy = cdx * bdy;
    const alift = adx * adx + ady * ady;

    const cdxady = cdx * ady;
    const adxcdy = adx * cdy;
    const blift = bdx * bdx + bdy * bdy;

    const adxbdy = adx * bdy;
    const bdxady = bdx * ady;
    const clift = cdx * cdx + cdy * cdy;

    const det =
        alift * (bdxcdy - cdxbdy) +
        blift * (cdxady - adxcdy) +
        clift * (adxbdy - bdxady);

    const permanent =
        (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * alift +
        (Math.abs(cdxady) + Math.abs(adxcdy)) * blift +
        (Math.abs(adxbdy) + Math.abs(bdxady)) * clift;

    const errbound = iccerrboundA * permanent;

    if (det > errbound || -det > errbound) {
        return det;
    }
    return incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent);
}

/**
 * @module util/math
 *
 * Core math utilities for triangle mesh operations.
 */

/**
 * 3D Euclidean distance between two points.
 * @param {{ x: number, y: number, z: number }} a
 * @param {{ x: number, y: number, z: number }} b
 * @returns {number}
 */
function dist3(a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	var dz = a.z - b.z;
	return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

/**
 * Squared 3D distance (avoids sqrt for comparisons).
 * @param {{ x: number, y: number, z: number }} a
 * @param {{ x: number, y: number, z: number }} b
 * @returns {number}
 */
function distSq3(a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	var dz = a.z - b.z;
	return dx * dx + dy * dy + dz * dz;
}

/**
 * Compute the area of a triangle in 3D using the cross-product method.
 * @param {{ v0: Object, v1: Object, v2: Object }} tri
 * @returns {number} Area in square units
 */
function triangleArea3D(tri) {
	var ux = tri.v1.x - tri.v0.x;
	var uy = tri.v1.y - tri.v0.y;
	var uz = tri.v1.z - tri.v0.z;
	var vx = tri.v2.x - tri.v0.x;
	var vy = tri.v2.y - tri.v0.y;
	var vz = tri.v2.z - tri.v0.z;
	var cx = uy * vz - uz * vy;
	var cy = uz * vx - ux * vz;
	var cz = ux * vy - uy * vx;
	return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
}

/**
 * Compute axis-aligned bounding box from an array of points.
 * @param {Array<{ x: number, y: number, z: number }>} points
 * @returns {{ minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number }}
 */
function computeBounds(points) {
	var minX = Infinity, minY = Infinity, minZ = Infinity;
	var maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
	for (var i = 0; i < points.length; i++) {
		var p = points[i];
		if (p.x < minX) minX = p.x;
		if (p.y < minY) minY = p.y;
		if (p.z < minZ) minZ = p.z;
		if (p.x > maxX) maxX = p.x;
		if (p.y > maxY) maxY = p.y;
		if (p.z > maxZ) maxZ = p.z;
	}
	return { minX: minX, maxX: maxX, minY: minY, maxY: maxY, minZ: minZ, maxZ: maxZ };
}

/**
 * Cross product of two 3D vectors.
 * @param {{ x: number, y: number, z: number }} a
 * @param {{ x: number, y: number, z: number }} b
 * @returns {{ x: number, y: number, z: number }}
 */
function cross(a, b) {
	return {
		x: a.y * b.z - a.z * b.y,
		y: a.z * b.x - a.x * b.z,
		z: a.x * b.y - a.y * b.x
	};
}

/**
 * Linearly interpolate between two vertices.
 * @param {{ x: number, y: number, z: number }} a
 * @param {{ x: number, y: number, z: number }} b
 * @param {number} t - Interpolation factor [0, 1]
 * @returns {{ x: number, y: number, z: number }}
 */
function lerpVert(a, b, t) {
	return {
		x: a.x + t * (b.x - a.x),
		y: a.y + t * (b.y - a.y),
		z: a.z + t * (b.z - a.z)
	};
}

/**
 * Standard vertex key for spatial hashing (6 decimal places).
 * @param {{ x: number, y: number, z: number }} v
 * @returns {string}
 */
function vKey(v) {
	return v.x.toFixed(6) + "," + v.y.toFixed(6) + "," + v.z.toFixed(6);
}

/**
 * Canonical edge key (order-independent).
 * @param {string} ka - Vertex key A
 * @param {string} kb - Vertex key B
 * @returns {string}
 */
function edgeKey(ka, kb) {
	return ka < kb ? ka + "|" + kb : kb + "|" + ka;
}

/**
 * Compute shared centroid of two triangle soups.
 */
function soupCentroid(soupA, soupB) {
	var sx = 0, sy = 0, sz = 0, n = 0;
	for (var i = 0; i < soupA.length; i++) {
		var t = soupA[i];
		sx += t.v0.x + t.v1.x + t.v2.x;
		sy += t.v0.y + t.v1.y + t.v2.y;
		sz += t.v0.z + t.v1.z + t.v2.z;
		n += 3;
	}
	for (var j = 0; j < soupB.length; j++) {
		var t2 = soupB[j];
		sx += t2.v0.x + t2.v1.x + t2.v2.x;
		sy += t2.v0.y + t2.v1.y + t2.v2.y;
		sz += t2.v0.z + t2.v1.z + t2.v2.z;
		n += 3;
	}
	return { x: sx / n, y: sy / n, z: sz / n };
}

/**
 * Translate a triangle soup by an offset.
 */
function translateSoup(soup, dx, dy, dz) {
	var out = new Array(soup.length);
	for (var i = 0; i < soup.length; i++) {
		var t = soup[i];
		out[i] = {
			v0: { x: t.v0.x + dx, y: t.v0.y + dy, z: t.v0.z + dz },
			v1: { x: t.v1.x + dx, y: t.v1.y + dy, z: t.v1.z + dz },
			v2: { x: t.v2.x + dx, y: t.v2.y + dy, z: t.v2.z + dz }
		};
	}
	return out;
}

/**
 * Count open (boundary) and non-manifold (over-shared) edges in a triangle soup.
 * @param {Array} tris - Array of {v0, v1, v2}
 * @returns {{ openEdges: number, overShared: number, total: number }}
 */
function countOpenEdges(tris) {
	var edgeMap = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(keys[e], keys[ne]);
			if (!edgeMap[ek]) {
				edgeMap[ek] = 0;
			}
			edgeMap[ek]++;
		}
	}

	var openEdges = 0;
	var overShared = 0;
	var total = 0;

	for (var ek2 in edgeMap) {
		total++;
		if (edgeMap[ek2] === 1) {
			openEdges++;
		} else if (edgeMap[ek2] > 2) {
			overShared++;
		}
	}

	return { openEdges: openEdges, overShared: overShared, total: total };
}

/**
 * @module normals/triNormal
 *
 * Compute the unit normal of a triangle from its three vertices.
 */


/**
 * Compute the unit face normal of a triangle.
 *
 * Uses the cross product of edges (v0->v1) x (v0->v2) and normalises
 * to unit length.  Returns the Z-up fallback {0,0,1} for degenerate
 * (zero-area) triangles.
 *
 * @param {{ v0: {x:number,y:number,z:number}, v1: {x:number,y:number,z:number}, v2: {x:number,y:number,z:number} }} tri
 * @returns {{ x: number, y: number, z: number }} Unit normal vector
 */
function triNormal(tri) {
    var e1 = { x: tri.v1.x - tri.v0.x, y: tri.v1.y - tri.v0.y, z: tri.v1.z - tri.v0.z };
    var e2 = { x: tri.v2.x - tri.v0.x, y: tri.v2.y - tri.v0.y, z: tri.v2.z - tri.v0.z };
    var n = cross(e1, e2);
    var len = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z);
    if (len < 1e-15) return { x: 0, y: 0, z: 1 };
    return { x: n.x / len, y: n.y / len, z: n.z / len };
}

/**
 * @module intersect/triTriIntersection
 *
 * Moller triangle-triangle intersection test.
 *
 * Determines whether two triangles intersect and, if so, computes the
 * line segment that lies on both triangles.  Based on the Moller (1997)
 * separating-axis / interval-overlap method.
 *
 * Exports:
 *  - triTriIntersection(triA, triB)          -- segment or null
 *  - triTriIntersectionDetailed(triA, triB)  -- signed distances + segLen
 *  - computeTriInterval(tri, lineDir, linePoint, d0, d1, d2)
 *  - findLinePoint(nA, dA, nB, dB, lineDir)
 */


/**
 * Moller triangle-triangle intersection.
 *
 * Projects each triangle onto the plane of the other, computes the
 * parametric overlap of their crossing intervals on the plane-plane
 * intersection line, and returns the resulting 3-D segment.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} triA
 * @param {{ v0: Object, v1: Object, v2: Object }} triB
 * @returns {{ p0: {x:number,y:number,z:number}, p1: {x:number,y:number,z:number} } | null}
 *          Intersection segment, or null when no intersection exists.
 */
function triTriIntersection(triA, triB) {
    // Robust orientation: signed distances of triA vertices to plane(triB)
    // orient3d returns a value proportional to 6× signed tetrahedron volume;
    // its sign is guaranteed correct even for near-degenerate configurations.
    var dA0 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v0.x, triA.v0.y, triA.v0.z);
    var dA1 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v1.x, triA.v1.y, triA.v1.z);
    var dA2 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v2.x, triA.v2.y, triA.v2.z);

    // All on same side -> no intersection
    if (dA0 > 0 && dA1 > 0 && dA2 > 0) return null;
    if (dA0 < 0 && dA1 < 0 && dA2 < 0) return null;

    // Robust orientation: signed distances of triB vertices to plane(triA)
    var dB0 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v0.x, triB.v0.y, triB.v0.z);
    var dB1 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v1.x, triB.v1.y, triB.v1.z);
    var dB2 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v2.x, triB.v2.y, triB.v2.z);

    // All on same side -> no intersection
    if (dB0 > 0 && dB1 > 0 && dB2 > 0) return null;
    if (dB0 < 0 && dB1 < 0 && dB2 < 0) return null;

    // Float normals for geometric computation (line direction, projections)
    var nA = triNormal(triA);
    var nB = triNormal(triB);

    // Near-parallel planes
    var dotN = nA.x * nB.x + nA.y * nB.y + nA.z * nB.z;
    if (Math.abs(dotN) > 0.9999) return null;

    // Intersection line direction
    var lineDir = cross(nA, nB);
    var lineDirLen = Math.sqrt(lineDir.x * lineDir.x + lineDir.y * lineDir.y + lineDir.z * lineDir.z);
    if (lineDirLen < 1e-12) return null;
    lineDir.x /= lineDirLen;
    lineDir.y /= lineDirLen;
    lineDir.z /= lineDirLen;

    // Plane constants for line-point computation
    var planeDA = -(nA.x * triA.v0.x + nA.y * triA.v0.y + nA.z * triA.v0.z);
    var planeDB = -(nB.x * triB.v0.x + nB.y * triB.v0.y + nB.z * triB.v0.z);

    // A point on the intersection line (needed for relative projection)
    var linePoint = findLinePoint(nA, planeDA, nB, planeDB, lineDir);
    if (!linePoint) return null;

    // Project each triangle's crossing edges onto the line
    var intervalA = computeTriInterval(triA, lineDir, linePoint, dA0, dA1, dA2);
    if (!intervalA) return null;

    var intervalB = computeTriInterval(triB, lineDir, linePoint, dB0, dB1, dB2);
    if (!intervalB) return null;

    // Overlap of intervals
    var overlapMin = Math.max(intervalA.min, intervalB.min);
    var overlapMax = Math.min(intervalA.max, intervalB.max);

    if (overlapMin >= overlapMax - 1e-10) return null;

    // Convert parametric overlap back to 3-D
    var p0 = {
        x: linePoint.x + lineDir.x * overlapMin,
        y: linePoint.y + lineDir.y * overlapMin,
        z: linePoint.z + lineDir.z * overlapMin
    };
    var p1 = {
        x: linePoint.x + lineDir.x * overlapMax,
        y: linePoint.y + lineDir.y * overlapMax,
        z: linePoint.z + lineDir.z * overlapMax
    };

    // Reproject onto both triangle planes to eliminate floating-point drift.
    // Solves for the minimal correction in the span of both normals so the
    // point lies exactly on both planes: P' = P - alpha*nA - beta*nB
    var denom = 1 - dotN * dotN;
    if (Math.abs(denom) > 1e-15) {
        var invD = 1 / denom;
        var rA0 = nA.x * p0.x + nA.y * p0.y + nA.z * p0.z + planeDA;
        var rB0 = nB.x * p0.x + nB.y * p0.y + nB.z * p0.z + planeDB;
        var a0 = (rA0 - dotN * rB0) * invD;
        var b0 = (rB0 - dotN * rA0) * invD;
        p0.x -= a0 * nA.x + b0 * nB.x;
        p0.y -= a0 * nA.y + b0 * nB.y;
        p0.z -= a0 * nA.z + b0 * nB.z;

        var rA1 = nA.x * p1.x + nA.y * p1.y + nA.z * p1.z + planeDA;
        var rB1 = nB.x * p1.x + nB.y * p1.y + nB.z * p1.z + planeDB;
        var a1 = (rA1 - dotN * rB1) * invD;
        var b1 = (rB1 - dotN * rA1) * invD;
        p1.x -= a1 * nA.x + b1 * nB.x;
        p1.y -= a1 * nA.y + b1 * nB.y;
        p1.z -= a1 * nA.z + b1 * nB.z;
    }

    // Skip degenerate segments
    var dx = p0.x - p1.x, dy = p0.y - p1.y, dz = p0.z - p1.z;
    if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 1e-8) return null;

    return { p0: p0, p1: p1 };
}

/**
 * Moller triangle-triangle intersection with signed-distance metadata.
 *
 * Identical rejection logic to {@link triTriIntersection} but instead of
 * returning the 3-D segment it returns the signed-distance arrays and the
 * parametric segment length, which callers (e.g. boolean classifiers) need
 * for inside/outside determination.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} triA
 * @param {{ v0: Object, v1: Object, v2: Object }} triB
 * @returns {{ dA: [number,number,number], dB: [number,number,number], segLen: number } | null}
 *          dA = signed distances of triA vertices to plane(triB),
 *          dB = signed distances of triB vertices to plane(triA),
 *          segLen = parametric length of the intersection segment.
 */
function triTriIntersectionDetailed(triA, triB) {
    // Robust orientation: signed distances of triA vertices to plane(triB)
    var dA0 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v0.x, triA.v0.y, triA.v0.z);
    var dA1 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v1.x, triA.v1.y, triA.v1.z);
    var dA2 = orient3d(triB.v0.x, triB.v0.y, triB.v0.z, triB.v1.x, triB.v1.y, triB.v1.z, triB.v2.x, triB.v2.y, triB.v2.z, triA.v2.x, triA.v2.y, triA.v2.z);

    if (dA0 > 0 && dA1 > 0 && dA2 > 0) return null;
    if (dA0 < 0 && dA1 < 0 && dA2 < 0) return null;

    // Robust orientation: signed distances of triB vertices to plane(triA)
    var dB0 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v0.x, triB.v0.y, triB.v0.z);
    var dB1 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v1.x, triB.v1.y, triB.v1.z);
    var dB2 = orient3d(triA.v0.x, triA.v0.y, triA.v0.z, triA.v1.x, triA.v1.y, triA.v1.z, triA.v2.x, triA.v2.y, triA.v2.z, triB.v2.x, triB.v2.y, triB.v2.z);

    if (dB0 > 0 && dB1 > 0 && dB2 > 0) return null;
    if (dB0 < 0 && dB1 < 0 && dB2 < 0) return null;

    var nA = triNormal(triA);
    var nB = triNormal(triB);

    var dotN = nA.x * nB.x + nA.y * nB.y + nA.z * nB.z;
    if (Math.abs(dotN) > 0.9999) return null;

    var lineDir = cross(nA, nB);
    var lineDirLen = Math.sqrt(lineDir.x * lineDir.x + lineDir.y * lineDir.y + lineDir.z * lineDir.z);
    if (lineDirLen < 1e-12) return null;
    lineDir.x /= lineDirLen; lineDir.y /= lineDirLen; lineDir.z /= lineDirLen;

    var planeDA = -(nA.x * triA.v0.x + nA.y * triA.v0.y + nA.z * triA.v0.z);
    var planeDB = -(nB.x * triB.v0.x + nB.y * triB.v0.y + nB.z * triB.v0.z);

    var linePoint = findLinePoint(nA, planeDA, nB, planeDB, lineDir);
    if (!linePoint) return null;

    var intervalA = computeTriInterval(triA, lineDir, linePoint, dA0, dA1, dA2);
    if (!intervalA) return null;

    var intervalB = computeTriInterval(triB, lineDir, linePoint, dB0, dB1, dB2);
    if (!intervalB) return null;

    var overlapMin = Math.max(intervalA.min, intervalB.min);
    var overlapMax = Math.min(intervalA.max, intervalB.max);
    if (overlapMin >= overlapMax - 1e-10) return null;

    var segLen = overlapMax - overlapMin;
    if (segLen < 1e-8) return null;

    return {
        dA: [dA0, dA1, dA2],
        dB: [dB0, dB1, dB2],
        segLen: segLen
    };
}

/**
 * Compute the parametric interval where a triangle crosses the
 * plane-plane intersection line.
 *
 * For each triangle edge that straddles the opposing plane (sign change
 * in the signed distances d0, d1, d2) the crossing point is projected
 * onto `lineDir` relative to `linePoint`.  Vertices exactly on the plane
 * are also projected.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} tri
 * @param {{ x: number, y: number, z: number }} lineDir  - Unit direction of intersection line
 * @param {{ x: number, y: number, z: number }} linePoint - Reference point on the line
 * @param {number} d0 - Signed distance of tri.v0 to the opposing plane
 * @param {number} d1 - Signed distance of tri.v1 to the opposing plane
 * @param {number} d2 - Signed distance of tri.v2 to the opposing plane
 * @returns {{ min: number, max: number } | null} Parametric interval, or null if fewer than 2 crossings
 */
function computeTriInterval(tri, lineDir, linePoint, d0, d1, d2) {
    var verts = [tri.v0, tri.v1, tri.v2];
    var dists = [d0, d1, d2];
    var params = [];

    // Find edges that cross the plane (sign change in distances)
    for (var i = 0; i < 3; i++) {
        var j = (i + 1) % 3;
        var di = dists[i];
        var dj = dists[j];

        if ((di > 0 && dj < 0) || (di < 0 && dj > 0)) {
            // Edge crosses the plane
            var t = di / (di - dj);
            var pt = {
                x: verts[i].x + t * (verts[j].x - verts[i].x),
                y: verts[i].y + t * (verts[j].y - verts[i].y),
                z: verts[i].z + t * (verts[j].z - verts[i].z)
            };
            // Relative projection onto line (relative to linePoint for UTM precision)
            var param = (pt.x - linePoint.x) * lineDir.x + (pt.y - linePoint.y) * lineDir.y + (pt.z - linePoint.z) * lineDir.z;
            params.push(param);
        } else if (di === 0) {
            // Vertex on the plane -- relative projection
            var param2 = (verts[i].x - linePoint.x) * lineDir.x + (verts[i].y - linePoint.y) * lineDir.y + (verts[i].z - linePoint.z) * lineDir.z;
            params.push(param2);
        }
    }

    if (params.length < 2) return null;

    // Deduplicate very close values
    params.sort(function (a, b) { return a - b; });

    return { min: params[0], max: params[params.length - 1] };
}

/**
 * Find a point on the intersection line of two planes.
 *
 * Sets the dominant component of `lineDir` to zero and solves the
 * resulting 2x2 system via Cramer's rule.
 *
 * @param {{ x: number, y: number, z: number }} nA - Normal of plane A
 * @param {number} dA - Plane constant for A  (nA . p + dA = 0)
 * @param {{ x: number, y: number, z: number }} nB - Normal of plane B
 * @param {number} dB - Plane constant for B
 * @param {{ x: number, y: number, z: number }} lineDir - Direction of the intersection line
 * @returns {{ x: number, y: number, z: number } | null}
 */
function findLinePoint(nA, dA, nB, dB, lineDir) {
    // Find the dominant axis of lineDir to set it to 0
    var ax = Math.abs(lineDir.x);
    var ay = Math.abs(lineDir.y);
    var az = Math.abs(lineDir.z);

    var px, py, pz;

    if (az >= ax && az >= ay) {
        // Set z = 0, solve for x, y via Cramer's rule
        var det = nA.x * nB.y - nA.y * nB.x;
        if (Math.abs(det) < 1e-12) return null;
        px = (-dA * nB.y + dB * nA.y) / det;
        py = (nA.x * (-dB) - nB.x * (-dA)) / det;
        pz = 0;
    } else if (ay >= ax) {
        // Set y = 0, solve for x, z via Cramer's rule
        var det2 = nA.x * nB.z - nA.z * nB.x;
        if (Math.abs(det2) < 1e-12) return null;
        px = (-dA * nB.z + dB * nA.z) / det2;
        py = 0;
        pz = (nA.x * (-dB) - nB.x * (-dA)) / det2;
    } else {
        // Set x = 0, solve for y, z via Cramer's rule
        var det3 = nA.y * nB.z - nA.z * nB.y;
        if (Math.abs(det3) < 1e-12) return null;
        px = 0;
        py = (-dA * nB.z + dB * nA.z) / det3;
        pz = (nA.y * (-dB) - nB.y * (-dA)) / det3;
    }

    return { x: px, y: py, z: pz };
}

/**
 * @module intersect/spatialGrid
 *
 * Uniform spatial grid for accelerating triangle-pair intersection tests.
 *
 * Triangles are binned into 2-D (XY) grid cells based on their axis-aligned
 * bounding boxes.  Querying the grid with a bounding box returns candidate
 * triangle indices that share at least one cell, dramatically reducing the
 * number of exact Moller tests required.
 *
 * Exports:
 *  - buildSpatialGrid(tris, cellSize)
 *  - queryGrid(grid, bb, cellSize)
 *  - computeBBox(tris)
 *  - triBBox(tri)
 *  - bboxOverlap(a, b)
 *  - estimateAvgEdge(tris)
 */


/**
 * Build a 2-D spatial hash grid on arbitrary axes.
 *
 * Unlike {@link buildSpatialGrid} which always hashes on XY,
 * this function accepts accessor functions to extract the two
 * bucketing coordinates.  For example, pass `v => v.y, v => v.z`
 * to build a YZ grid suitable for X-direction ray casting.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @param {number} cellSize - Width/height of each grid cell (world units)
 * @param {function(Object): number} getA - Extracts first axis value from vertex
 * @param {function(Object): number} getB - Extracts second axis value from vertex
 * @returns {Object.<string, number[]>} Grid mapping cell keys to triangle index arrays
 */
function buildSpatialGridOnAxes(tris, cellSize, getA, getB) {
	var grid = {};

	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		var verts = [t.v0, t.v1, t.v2];

		var minA = Infinity, maxA = -Infinity;
		var minB = Infinity, maxB = -Infinity;
		for (var j = 0; j < 3; j++) {
			var a = getA(verts[j]), b = getB(verts[j]);
			if (a < minA) minA = a;
			if (a > maxA) maxA = a;
			if (b < minB) minB = b;
			if (b > maxB) maxB = b;
		}

		var a0 = Math.floor(minA / cellSize);
		var b0 = Math.floor(minB / cellSize);
		var a1 = Math.floor(maxA / cellSize);
		var b1 = Math.floor(maxB / cellSize);

		for (var ga = a0; ga <= a1; ga++) {
			for (var gb = b0; gb <= b1; gb++) {
				var key = ga + "," + gb;
				if (!grid[key]) grid[key] = [];
				grid[key].push(i);
			}
		}
	}

	return grid;
}

/**
 * Query a grid built by {@link buildSpatialGridOnAxes} for a single point.
 *
 * Returns the triangle indices stored in the cell containing the
 * given (a, b) coordinates.  No deduplication is needed because
 * point queries always hit exactly one cell.
 *
 * @param {Object.<string, number[]>} grid - Grid built by buildSpatialGridOnAxes
 * @param {number} a - First axis coordinate of the query point
 * @param {number} b - Second axis coordinate of the query point
 * @param {number} cellSize - Same cell size used when building the grid
 * @returns {number[]} Triangle indices (empty array if cell is empty)
 */
function queryGridOnAxes(grid, a, b, cellSize) {
	var ga = Math.floor(a / cellSize);
	var gb = Math.floor(b / cellSize);
	var key = ga + "," + gb;
	var cell = grid[key];
	return cell ? cell : [];
}

/**
 * Build a 2-D spatial hash grid from an array of triangles.
 *
 * Each triangle is inserted into every XY cell that its axis-aligned
 * bounding box overlaps.  The grid is keyed by "cellX,cellY" strings
 * and each bucket holds an array of triangle indices.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @param {number} cellSize - Width/height of each grid cell (world units)
 * @returns {Object.<string, number[]>} Grid mapping cell keys to triangle index arrays
 */
function buildSpatialGrid(tris, cellSize) {
    var grid = {};

    for (var i = 0; i < tris.length; i++) {
        var bb = triBBox(tris[i]);
        var x0 = Math.floor(bb.minX / cellSize);
        var y0 = Math.floor(bb.minY / cellSize);
        var x1 = Math.floor(bb.maxX / cellSize);
        var y1 = Math.floor(bb.maxY / cellSize);

        for (var gx = x0; gx <= x1; gx++) {
            for (var gy = y0; gy <= y1; gy++) {
                var key = gx + "," + gy;
                if (!grid[key]) grid[key] = [];
                grid[key].push(i);
            }
        }
    }

    return grid;
}

/**
 * Query the spatial grid for triangle indices whose cells overlap a
 * given bounding box.
 *
 * Returned indices are de-duplicated (a triangle spanning multiple cells
 * appears only once).
 *
 * @param {Object.<string, number[]>} grid - Grid built by {@link buildSpatialGrid}
 * @param {{ minX: number, minY: number, maxX: number, maxY: number }} bb - Query bounding box
 * @param {number} cellSize - Same cell size used when building the grid
 * @returns {number[]} Unique triangle indices
 */
function queryGrid(grid, bb, cellSize) {
    var x0 = Math.floor(bb.minX / cellSize);
    var y0 = Math.floor(bb.minY / cellSize);
    var x1 = Math.floor(bb.maxX / cellSize);
    var y1 = Math.floor(bb.maxY / cellSize);

    var seen = {};
    var result = [];

    for (var gx = x0; gx <= x1; gx++) {
        for (var gy = y0; gy <= y1; gy++) {
            var key = gx + "," + gy;
            var cell = grid[key];
            if (!cell) continue;
            for (var c = 0; c < cell.length; c++) {
                var idx = cell[c];
                if (!seen[idx]) {
                    seen[idx] = true;
                    result.push(idx);
                }
            }
        }
    }

    return result;
}

/**
 * Compute the axis-aligned bounding box of a triangle array.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @returns {{ minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number }}
 */
function computeBBox(tris) {
    var minX = Infinity, minY = Infinity, minZ = Infinity;
    var maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

    for (var i = 0; i < tris.length; i++) {
        var t = tris[i];
        var verts = [t.v0, t.v1, t.v2];
        for (var j = 0; j < 3; j++) {
            var v = verts[j];
            if (v.x < minX) minX = v.x;
            if (v.y < minY) minY = v.y;
            if (v.z < minZ) minZ = v.z;
            if (v.x > maxX) maxX = v.x;
            if (v.y > maxY) maxY = v.y;
            if (v.z > maxZ) maxZ = v.z;
        }
    }

    return { minX: minX, minY: minY, minZ: minZ, maxX: maxX, maxY: maxY, maxZ: maxZ };
}

/**
 * Compute the axis-aligned bounding box of a single triangle.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} tri
 * @returns {{ minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number }}
 */
function triBBox(tri) {
    return {
        minX: Math.min(tri.v0.x, tri.v1.x, tri.v2.x),
        minY: Math.min(tri.v0.y, tri.v1.y, tri.v2.y),
        minZ: Math.min(tri.v0.z, tri.v1.z, tri.v2.z),
        maxX: Math.max(tri.v0.x, tri.v1.x, tri.v2.x),
        maxY: Math.max(tri.v0.y, tri.v1.y, tri.v2.y),
        maxZ: Math.max(tri.v0.z, tri.v1.z, tri.v2.z)
    };
}

/**
 * Test whether two axis-aligned bounding boxes overlap in all three axes.
 *
 * @param {{ minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number }} a
 * @param {{ minX: number, minY: number, minZ: number, maxX: number, maxY: number, maxZ: number }} b
 * @returns {boolean}
 */
function bboxOverlap(a, b) {
    return a.minX <= b.maxX && a.maxX >= b.minX &&
           a.minY <= b.maxY && a.maxY >= b.minY &&
           a.minZ <= b.maxZ && a.maxZ >= b.minZ;
}

/**
 * Estimate the average edge length of a triangle array by sampling
 * up to the first 100 triangles.
 *
 * Useful for choosing a spatial grid cell size proportional to the
 * mesh resolution.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} tris
 * @returns {number} Average edge length (defaults to 1.0 for empty input)
 */
function estimateAvgEdge(tris) {
    if (tris.length === 0) return 1.0;
    var total = 0;
    var count = Math.min(tris.length, 100);
    for (var i = 0; i < count; i++) {
        var t = tris[i];
        total += dist3(t.v0, t.v1);
        total += dist3(t.v1, t.v2);
        total += dist3(t.v2, t.v0);
    }
    return total / (count * 3);
}

/**
 * @module intersect/intersectMeshPair
 *
 * Compute all triangle-triangle intersection segments between two
 * triangle meshes, accelerated by a uniform spatial grid.
 *
 * Exports:
 *  - intersectMeshPair(trisA, trisB)        -- array of {p0, p1} segments
 *  - intersectMeshPairTagged(trisA, trisB)  -- segments with source triangle indices
 */


/**
 * Find all intersection segments between two triangle meshes.
 *
 * Builds a spatial grid on mesh B and, for each triangle in mesh A,
 * queries the grid for candidate triangles in B whose bounding boxes
 * overlap, then runs the exact Moller triangle-triangle test on each
 * candidate pair.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA - First mesh triangles
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB - Second mesh triangles
 * @returns {Array<{ p0: {x:number,y:number,z:number}, p1: {x:number,y:number,z:number} }>}
 *          Intersection segments (may be empty)
 */
function intersectMeshPair(trisA, trisB) {
    var segments = [];

    // Compute average edge length for grid cell size
    var avgEdge = estimateAvgEdge(trisB);
    var cellSize = Math.max(avgEdge * 2, 0.1);

    // Build grid on mesh B
    var gridB = buildSpatialGrid(trisB, cellSize);

    // For each triangle in A, find candidate triangles in B
    for (var i = 0; i < trisA.length; i++) {
        var triA = trisA[i];
        var bbA = triBBox(triA);

        var candidates = queryGrid(gridB, bbA, cellSize);

        for (var c = 0; c < candidates.length; c++) {
            var triB = trisB[candidates[c]];

            var seg = triTriIntersection(triA, triB);
            if (seg) {
                segments.push(seg);
            }
        }
    }

    return segments;
}

/**
 * Like {@link intersectMeshPair} but each returned segment carries the
 * source triangle indices from mesh A and mesh B.
 *
 * Useful for boolean operations and classification that need to know
 * which triangles produced each intersection segment.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA - First mesh triangles
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB - Second mesh triangles
 * @returns {Array<{ p0: {x:number,y:number,z:number}, p1: {x:number,y:number,z:number}, idxA: number, idxB: number }>}
 *          Tagged intersection segments (may be empty)
 */
function intersectMeshPairTagged(trisA, trisB) {
    var segments = [];

    var avgEdge = estimateAvgEdge(trisB);
    var cellSize = Math.max(avgEdge * 2, 0.1);
    var gridB = buildSpatialGrid(trisB, cellSize);

    for (var i = 0; i < trisA.length; i++) {
        var triA = trisA[i];
        var bbA = triBBox(triA);
        var candidates = queryGrid(gridB, bbA, cellSize);

        for (var c = 0; c < candidates.length; c++) {
            var j = candidates[c];
            var triB = trisB[j];
            var seg = triTriIntersection(triA, triB);
            if (seg) {
                segments.push({ p0: seg.p0, p1: seg.p1, idxA: i, idxB: j });
            }
        }
    }

    return segments;
}

const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);

class Delaunator {

    static from(points, getX = defaultGetX, getY = defaultGetY) {
        const n = points.length;
        const coords = new Float64Array(n * 2);

        for (let i = 0; i < n; i++) {
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }

        return new Delaunator(coords);
    }

    constructor(coords) {
        const n = coords.length >> 1;
        if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

        this.coords = coords;

        // arrays that will store the triangulation graph
        const maxTriangles = Math.max(2 * n - 5, 0);
        this._triangles = new Uint32Array(maxTriangles * 3);
        this._halfedges = new Int32Array(maxTriangles * 3);

        // temporary arrays for tracking the edges of the advancing convex hull
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hullPrev = new Uint32Array(n); // edge to prev edge
        this._hullNext = new Uint32Array(n); // edge to next edge
        this._hullTri = new Uint32Array(n); // edge to adjacent triangle
        this._hullHash = new Int32Array(this._hashSize); // angular edge hash

        // temporary arrays for sorting points
        this._ids = new Uint32Array(n);
        this._dists = new Float64Array(n);

        this.update();
    }

    update() {
        const {coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash} =  this;
        const n = coords.length >> 1;

        // populate an array of point indices; calculate input data bbox
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        for (let i = 0; i < n; i++) {
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            this._ids[i] = i;
        }
        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;

        let i0, i1, i2;

        // pick a seed point close to the center
        for (let i = 0, minDist = Infinity; i < n; i++) {
            const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];

        // find the point closest to the seed
        for (let i = 0, minDist = Infinity; i < n; i++) {
            if (i === i0) continue;
            const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist && d > 0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];

        let minRadius = Infinity;

        // find the third point which forms the smallest circumcircle with the first two
        for (let i = 0; i < n; i++) {
            if (i === i0 || i === i1) continue;
            const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];

        if (minRadius === Infinity) {
            // order collinear points by dx (or dy if all x are identical)
            // and return the list as a hull
            for (let i = 0; i < n; i++) {
                this._dists[i] = (coords[2 * i] - coords[0]) || (coords[2 * i + 1] - coords[1]);
            }
            quicksort(this._ids, this._dists, 0, n - 1);
            const hull = new Uint32Array(n);
            let j = 0;
            for (let i = 0, d0 = -Infinity; i < n; i++) {
                const id = this._ids[i];
                const d = this._dists[id];
                if (d > d0) {
                    hull[j++] = id;
                    d0 = d;
                }
            }
            this.hull = hull.subarray(0, j);
            this.triangles = new Uint32Array(0);
            this.halfedges = new Uint32Array(0);
            return;
        }

        // swap the order of the seed points for counter-clockwise orientation
        if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }

        const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center.x;
        this._cy = center.y;

        for (let i = 0; i < n; i++) {
            this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
        }

        // sort the points by distance from the seed triangle circumcenter
        quicksort(this._ids, this._dists, 0, n - 1);

        // set up the seed triangle as the starting hull
        this._hullStart = i0;
        let hullSize = 3;

        hullNext[i0] = hullPrev[i2] = i1;
        hullNext[i1] = hullPrev[i0] = i2;
        hullNext[i2] = hullPrev[i1] = i0;

        hullTri[i0] = 0;
        hullTri[i1] = 1;
        hullTri[i2] = 2;

        hullHash.fill(-1);
        hullHash[this._hashKey(i0x, i0y)] = i0;
        hullHash[this._hashKey(i1x, i1y)] = i1;
        hullHash[this._hashKey(i2x, i2y)] = i2;

        this.trianglesLen = 0;
        this._addTriangle(i0, i1, i2, -1, -1, -1);

        for (let k = 0, xp, yp; k < this._ids.length; k++) {
            const i = this._ids[k];
            const x = coords[2 * i];
            const y = coords[2 * i + 1];

            // skip near-duplicate points
            if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
            xp = x;
            yp = y;

            // skip seed triangle points
            if (i === i0 || i === i1 || i === i2) continue;

            // find a visible edge on the convex hull using edge hash
            let start = 0;
            for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
                start = hullHash[(key + j) % this._hashSize];
                if (start !== -1 && start !== hullNext[start]) break;
            }

            start = hullPrev[start];
            let e = start, q;
            while (q = hullNext[e], orient2d(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
                e = q;
                if (e === start) {
                    e = -1;
                    break;
                }
            }
            if (e === -1) continue; // likely a near-duplicate point; skip it

            // add the first triangle from the point
            let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

            // recursively flip triangles from the point until they satisfy the Delaunay condition
            hullTri[i] = this._legalize(t + 2);
            hullTri[e] = t; // keep track of boundary triangles on the hull
            hullSize++;

            // walk forward through the hull, adding more triangles and flipping recursively
            let n = hullNext[e];
            while (q = hullNext[n], orient2d(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
                t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
                hullTri[i] = this._legalize(t + 2);
                hullNext[n] = n; // mark as removed
                hullSize--;
                n = q;
            }

            // walk backward from the other side, adding more triangles and flipping
            if (e === start) {
                while (q = hullPrev[e], orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
                    t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
                    this._legalize(t + 2);
                    hullTri[q] = t;
                    hullNext[e] = e; // mark as removed
                    hullSize--;
                    e = q;
                }
            }

            // update the hull indices
            this._hullStart = hullPrev[i] = e;
            hullNext[e] = hullPrev[n] = i;
            hullNext[i] = n;

            // save the two new edges in the hash table
            hullHash[this._hashKey(x, y)] = i;
            hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
        }

        this.hull = new Uint32Array(hullSize);
        for (let i = 0, e = this._hullStart; i < hullSize; i++) {
            this.hull[i] = e;
            e = hullNext[e];
        }

        // trim typed triangle mesh arrays
        this.triangles = this._triangles.subarray(0, this.trianglesLen);
        this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
    }

    _hashKey(x, y) {
        return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }

    _legalize(a) {
        const {_triangles: triangles, _halfedges: halfedges, coords} = this;

        let i = 0;
        let ar = 0;

        // recursion eliminated with a fixed-size stack
        while (true) {
            const b = halfedges[a];

            /* if the pair of triangles doesn't satisfy the Delaunay condition
             * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
             * then do the same check/flip recursively for the new pair of triangles
             *
             *           pl                    pl
             *          /||\                  /  \
             *       al/ || \bl            al/    \a
             *        /  ||  \              /      \
             *       /  a||b  \    flip    /___ar___\
             *     p0\   ||   /p1   =>   p0\---bl---/p1
             *        \  ||  /              \      /
             *       ar\ || /br             b\    /br
             *          \||/                  \  /
             *           pr                    pr
             */
            const a0 = a - a % 3;
            ar = a0 + (a + 2) % 3;

            if (b === -1) { // convex hull edge
                if (i === 0) break;
                a = EDGE_STACK[--i];
                continue;
            }

            const b0 = b - b % 3;
            const al = a0 + (a + 1) % 3;
            const bl = b0 + (b + 2) % 3;

            const p0 = triangles[ar];
            const pr = triangles[a];
            const pl = triangles[al];
            const p1 = triangles[bl];

            const illegal = inCircle(
                coords[2 * p0], coords[2 * p0 + 1],
                coords[2 * pr], coords[2 * pr + 1],
                coords[2 * pl], coords[2 * pl + 1],
                coords[2 * p1], coords[2 * p1 + 1]);

            if (illegal) {
                triangles[a] = p1;
                triangles[b] = p0;

                const hbl = halfedges[bl];

                // edge swapped on the other side of the hull (rare); fix the halfedge reference
                if (hbl === -1) {
                    let e = this._hullStart;
                    do {
                        if (this._hullTri[e] === bl) {
                            this._hullTri[e] = a;
                            break;
                        }
                        e = this._hullPrev[e];
                    } while (e !== this._hullStart);
                }
                this._link(a, hbl);
                this._link(b, halfedges[ar]);
                this._link(ar, bl);

                const br = b0 + (b + 1) % 3;

                // don't worry about hitting the cap: it can only happen on extremely degenerate input
                if (i < EDGE_STACK.length) {
                    EDGE_STACK[i++] = br;
                }
            } else {
                if (i === 0) break;
                a = EDGE_STACK[--i];
            }
        }

        return ar;
    }

    _link(a, b) {
        this._halfedges[a] = b;
        if (b !== -1) this._halfedges[b] = a;
    }

    // add a new triangle given vertex indices and adjacent half-edge ids
    _addTriangle(i0, i1, i2, a, b, c) {
        const t = this.trianglesLen;

        this._triangles[t] = i0;
        this._triangles[t + 1] = i1;
        this._triangles[t + 2] = i2;

        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);

        this.trianglesLen += 3;

        return t;
    }
}

// monotonically increases with real angle, but doesn't need expensive trigonometry
function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
}

function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;

    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;

    return dx * (ey * cp - bp * fy) -
           dy * (ex * cp - bp * fx) +
           ap * (ex * fy - ey * fx) < 0;
}

function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = (ey * bl - dy * cl) * d;
    const y = (dx * cl - ex * bl) * d;

    return x * x + y * y;
}

function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = 0.5 / (dx * ey - dy * ex);

    const x = ax + (ey * bl - dy * cl) * d;
    const y = ay + (dx * cl - ex * bl) * d;

    return {x, y};
}

function quicksort(ids, dists, left, right) {
    if (right - left <= 20) {
        for (let i = left + 1; i <= right; i++) {
            const temp = ids[i];
            const tempDist = dists[temp];
            let j = i - 1;
            while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
            ids[j + 1] = temp;
        }
    } else {
        const median = (left + right) >> 1;
        let i = left + 1;
        let j = right;
        swap(ids, median, i);
        if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
        if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
        if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);

        const temp = ids[i];
        const tempDist = dists[temp];
        while (true) {
            do i++; while (dists[ids[i]] < tempDist);
            do j--; while (dists[ids[j]] > tempDist);
            if (j < i) break;
            swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;

        if (right - i + 1 >= j - left) {
            quicksort(ids, dists, i, right);
            quicksort(ids, dists, left, j - 1);
        } else {
            quicksort(ids, dists, left, j - 1);
            quicksort(ids, dists, i, right);
        }
    }
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}

/**
 * A set of numbers, stored as bits in a typed array. The amount of numbers /
 * the maximum number that can be stored is limited by the length, which is
 * fixed at construction time.
 */
class BitSet {
    constructor(W, bs) {
        this.W = W;
        this.bs = bs;
    }
    /**
     * Add a number to the set.
     *
     * @param idx The number to add. Must be 0 <= idx < len.
     * @return this.
     */
    add(idx) {
        const W = this.W, byte = (idx / W) | 0, bit = idx % W;
        this.bs[byte] |= 1 << bit;
        return this;
    }
    /**
     * Delete a number from the set.
     *
     * @param idx The number to delete. Must be 0 <= idx < len.
     * @return this.
     */
    delete(idx) {
        const W = this.W, byte = (idx / W) | 0, bit = idx % W;
        this.bs[byte] &= ~(1 << bit);
        return this;
    }
    /**
     * Add or delete a number in the set, depending on the second argument.
     *
     * @param idx The number to add or delete. Must be 0 <= idx < len.
     * @param val If true, add the number, otherwise delete.
     * @return val.
     */
    set(idx, val) {
        const W = this.W, byte = (idx / W) | 0, bit = idx % W, m = 1 << bit;
        //this.bs[byte] = set ? this.bs[byte] | m : this.bs[byte] & ~m;
        this.bs[byte] ^= (-val ^ this.bs[byte]) & m; // -set == set * 255
        return val;
    }
    /**
     * Whether the number is in the set.
     *
     * @param idx The number to test. Must be 0 <= idx < len.
     * @return True if the number is in the set.
     */
    has(idx) {
        const W = this.W, byte = (idx / W) | 0, bit = idx % W;
        return !!(this.bs[byte] & (1 << bit));
    }
    /**
     * Iterate over the numbers that are in the set. The callback is invoked
     * with each number that is set. It is allowed to change the BitSet during
     * iteration. If it deletes a number that has not been iterated over, that
     * number will not show up in a later call. If it adds a number during
     * iteration, that number may or may not show up in a later call.
     *
     * @param fn The function to call for each number.
     * @return this.
     */
    forEach(fn) {
        const W = this.W, bs = this.bs, len = bs.length;
        for (let byte = 0; byte < len; byte++) {
            let bit = 0;
            // bs[byte] may change during iteration
            while (bs[byte] && bit < W) {
                if (bs[byte] & (1 << bit)) {
                    fn(byte * W + bit);
                }
                bit++;
            }
        }
        return this;
    }
}
/**
 * A bit set using 8 bits per cell.
 */
class BitSet8 extends BitSet {
    /**
     * Create a bit set.
     *
     * @param len The length of the bit set, limiting the maximum value that
     *        can be stored in it to len - 1.
     */
    constructor(len) {
        const W = 8, bs = new Uint8Array(Math.ceil(len / W)).fill(0);
        super(W, bs);
    }
}

function nextEdge(e) { return (e % 3 === 2) ? e - 2 : e + 1; }
function prevEdge(e) { return (e % 3 === 0) ? e + 2 : e - 1; }
/**
 * Constrain a triangulation from Delaunator, using (parts of) the algorithm
 * in "A fast algorithm for generating constrained Delaunay triangulations" by
 * S. W. Sloan.
 */
class Constrainautor {
    /**
     * Make a Constrainautor.
     *
     * @param del The triangulation output from Delaunator.
     * @param edges If provided, constrain these edges as by constrainAll.
     */
    constructor(del, edges) {
        if (!del || typeof del !== 'object' || !del.triangles || !del.halfedges || !del.coords) {
            throw new Error("Expected an object with Delaunator output");
        }
        if (del.triangles.length % 3 || del.halfedges.length !== del.triangles.length || del.coords.length % 2) {
            throw new Error("Delaunator output appears inconsistent");
        }
        if (del.triangles.length < 3) {
            throw new Error("No edges in triangulation");
        }
        this.del = del;
        const U32NIL = 2 ** 32 - 1, // Max value of a Uint32Array: use as a sentinel for not yet defined 
        numPoints = del.coords.length >> 1, numEdges = del.triangles.length;
        // Map every vertex id to the right-most edge that points to that vertex.
        this.vertMap = new Uint32Array(numPoints).fill(U32NIL);
        // Keep track of edges flipped while constraining
        this.flips = new BitSet8(numEdges);
        // Keep track of constrained edges
        this.consd = new BitSet8(numEdges);
        for (let e = 0; e < numEdges; e++) {
            const v = del.triangles[e];
            if (this.vertMap[v] === U32NIL) {
                this.updateVert(e);
            }
        }
        if (edges) {
            this.constrainAll(edges);
        }
    }
    /**
     * Constrain the triangulation such that there is an edge between p1 and p2.
     *
     * @param segP1 The index of one segment end-point in the coords array.
     * @param segP2 The index of the other segment end-point in the coords array.
     * @return The id of the edge that points from p1 to p2. If the
     *         constrained edge lies on the hull and points in the opposite
     *         direction (p2 to p1), the negative of its id is returned.
     */
    constrainOne(segP1, segP2) {
        const { triangles, halfedges } = this.del, vm = this.vertMap, consd = this.consd, start = vm[segP1];
        // Loop over the edges touching segP1
        let edg = start;
        do {
            // edg points toward segP1, so its start-point is opposite it
            const p4 = triangles[edg], nxt = nextEdge(edg);
            // already constrained, but in reverse order
            if (p4 === segP2) {
                return this.protect(edg);
            }
            // The edge opposite segP1
            const opp = prevEdge(edg), p3 = triangles[opp];
            // already constrained
            if (p3 === segP2) {
                this.protect(nxt);
                return nxt;
            }
            // edge opposite segP1 intersects constraint
            if (this.intersectSegments(segP1, segP2, p3, p4)) {
                edg = opp;
                break;
            }
            const adj = halfedges[nxt];
            // The next edge pointing to segP1
            edg = adj;
        } while (edg !== -1 && edg !== start);
        let conEdge = edg;
        // Walk through the triangulation looking for further intersecting
        // edges and flip them. If an intersecting edge cannot be flipped,
        // assign its id to `rescan` and restart from there, until there are
        // no more intersects.
        let rescan = -1;
        while (edg !== -1) {
            // edg is the intersecting half-edge in the triangle we came from
            // adj is now the opposite half-edge in the adjacent triangle, which
            // is away from segP1.
            const adj = halfedges[edg], 
            // cross diagonal
            bot = prevEdge(edg), top = prevEdge(adj), rgt = nextEdge(adj);
            if (adj === -1) {
                throw new Error("Constraining edge exited the hull");
            }
            if (consd.has(edg)) { // || consd.has(adj) // assume consd is consistent
                throw new Error("Edge intersects already constrained edge");
            }
            if (this.isCollinear(segP1, segP2, triangles[edg]) ||
                this.isCollinear(segP1, segP2, triangles[adj])) {
                throw new Error("Constraining edge intersects point");
            }
            const convex = this.intersectSegments(triangles[edg], triangles[adj], triangles[bot], triangles[top]);
            // The quadrilateral formed by the two triangles adjoing edg is not
            // convex, so the edge can't be flipped. Continue looking for the
            // next intersecting edge and restart at this one later.
            if (!convex) {
                if (rescan === -1) {
                    rescan = edg;
                }
                if (triangles[top] === segP2) {
                    if (edg === rescan) {
                        throw new Error("Infinite loop: non-convex quadrilateral");
                    }
                    edg = rescan;
                    rescan = -1;
                    continue;
                }
                // Look for the next intersect
                if (this.intersectSegments(segP1, segP2, triangles[top], triangles[adj])) {
                    edg = top;
                }
                else if (this.intersectSegments(segP1, segP2, triangles[rgt], triangles[top])) {
                    edg = rgt;
                }
                else if (rescan === edg) {
                    throw new Error("Infinite loop: no further intersect after non-convex");
                }
                continue;
            }
            this.flipDiagonal(edg);
            // The new edge might still intersect, which will be fixed in the
            // next rescan.
            if (this.intersectSegments(segP1, segP2, triangles[bot], triangles[top])) {
                if (rescan === -1) {
                    rescan = bot;
                }
                if (rescan === bot) {
                    throw new Error("Infinite loop: flipped diagonal still intersects");
                }
            }
            // Reached the other segment end-point? Start the rescan.
            if (triangles[top] === segP2) {
                conEdge = top;
                edg = rescan;
                rescan = -1;
                // Otherwise, for the next edge that intersects. Because we just
                // flipped, it's either edg again, or rgt.
            }
            else if (this.intersectSegments(segP1, segP2, triangles[rgt], triangles[top])) {
                edg = rgt;
            }
        }
        const flips = this.flips;
        this.protect(conEdge);
        do {
            // need to use var to scope it outside the loop, but re-initialize
            // to 0 each iteration
            var flipped = 0;
            flips.forEach(edg => {
                flips.delete(edg);
                const adj = halfedges[edg];
                if (adj === -1) {
                    return;
                }
                flips.delete(adj);
                if (!this.isDelaunay(edg)) {
                    this.flipDiagonal(edg);
                    flipped++;
                }
            });
        } while (flipped > 0);
        return this.findEdge(segP1, segP2);
    }
    /**
     * Fix the Delaunay condition. It is no longer necessary to call this
     * method after constraining (many) edges, since constrainOne will do it
     * after each.
     *
     * @param deep If true, keep checking & flipping edges until all
     *        edges are Delaunay, otherwise only check the edges once.
     * @return The triangulation object.
     */
    delaunify(deep = false) {
        const halfedges = this.del.halfedges, flips = this.flips, consd = this.consd, len = halfedges.length;
        do {
            var flipped = 0;
            for (let edg = 0; edg < len; edg++) {
                if (consd.has(edg)) {
                    continue;
                }
                flips.delete(edg);
                const adj = halfedges[edg];
                if (adj === -1) {
                    continue;
                }
                flips.delete(adj);
                if (!this.isDelaunay(edg)) {
                    this.flipDiagonal(edg);
                    flipped++;
                }
            }
        } while (deep && flipped > 0);
        return this;
    }
    /**
     * Call constrainOne on each edge, and delaunify afterwards.
     *
     * @param edges The edges to constrain: each element is an array with
     *        [p1, p2] which are indices into the points array originally
     *        supplied to Delaunator.
     * @return The triangulation object.
     */
    constrainAll(edges) {
        const len = edges.length;
        for (let i = 0; i < len; i++) {
            const e = edges[i];
            this.constrainOne(e[0], e[1]);
        }
        return this;
    }
    /**
     * Whether an edge is a constrained edge.
     *
     * @param edg The edge id.
     * @return True if the edge is constrained.
     */
    isConstrained(edg) {
        return this.consd.has(edg);
    }
    /**
     * Find the edge that points from p1 -> p2. If there is only an edge from
     * p2 -> p1 (i.e. it is on the hull), returns the negative id of it.
     *
     * @param p1 The index of the first point into the points array.
     * @param p2 The index of the second point into the points array.
     * @return The id of the edge that points from p1 -> p2, or the negative
     *         id of the edge that goes from p2 -> p1, or Infinity if there is
     *         no edge between p1 and p2.
     */
    findEdge(p1, p2) {
        const start1 = this.vertMap[p2], { triangles, halfedges } = this.del;
        let edg = start1, prv = -1;
        // Walk around p2, iterating over the edges pointing to it
        do {
            if (triangles[edg] === p1) {
                return edg;
            }
            prv = nextEdge(edg);
            edg = halfedges[prv];
        } while (edg !== -1 && edg !== start1);
        // Did not find p1 -> p2, the only option is that it is on the hull on
        // the 'left-hand' side, pointing p2 -> p1 (or there is no edge)
        if (triangles[nextEdge(prv)] === p1) {
            return -prv;
        }
        return Infinity;
    }
    /**
     * Mark an edge as constrained, i.e. should not be touched by `delaunify`.
     *
     * @private
     * @param edg The edge id.
     * @return If edg has an adjacent, returns that, otherwise -edg.
     */
    protect(edg) {
        const adj = this.del.halfedges[edg], flips = this.flips, consd = this.consd;
        flips.delete(edg);
        consd.add(edg);
        if (adj !== -1) {
            flips.delete(adj);
            consd.add(adj);
            return adj;
        }
        return -edg;
    }
    /**
     * Mark an edge as flipped, unless it is already marked as constrained.
     *
     * @private
     * @param edg The edge id.
     * @return True if edg was not constrained.
     */
    markFlip(edg) {
        const halfedges = this.del.halfedges, flips = this.flips, consd = this.consd;
        if (consd.has(edg)) {
            return false;
        }
        const adj = halfedges[edg];
        if (adj !== -1) {
            flips.add(edg);
            flips.add(adj);
        }
        return true;
    }
    /**
     * Flip the edge shared by two triangles.
     *
     * @private
     * @param edg The edge shared by the two triangles, must have an
     *        adjacent half-edge.
     * @return The new diagonal.
     */
    flipDiagonal(edg) {
        // Flip a diagonal
        //                top                     edg
        //          o  <----- o            o <------  o 
        //         | ^ \      ^           |       ^ / ^
        //      lft|  \ \     |        lft|      / /  |
        //         |   \ \adj |           |  bot/ /   |
        //         | edg\ \   |           |    / /top |
        //         |     \ \  |rgt        |   / /     |rgt
        //         v      \ v |           v  / v      |
        //         o ----->  o            o   ------> o 
        //           bot                     adj
        const { triangles, halfedges } = this.del, flips = this.flips, consd = this.consd, adj = halfedges[edg], bot = prevEdge(edg), lft = nextEdge(edg), top = prevEdge(adj), rgt = nextEdge(adj), adjBot = halfedges[bot], adjTop = halfedges[top];
        if (consd.has(edg)) { // || consd.has(adj) // assume consd is consistent
            throw new Error("Trying to flip a constrained edge");
        }
        // move *edg to *top
        triangles[edg] = triangles[top];
        halfedges[edg] = adjTop;
        if (!flips.set(edg, flips.has(top))) {
            consd.set(edg, consd.has(top));
        }
        if (adjTop !== -1) {
            halfedges[adjTop] = edg;
        }
        halfedges[bot] = top;
        // move *adj to *bot
        triangles[adj] = triangles[bot];
        halfedges[adj] = adjBot;
        if (!flips.set(adj, flips.has(bot))) {
            consd.set(adj, consd.has(bot));
        }
        if (adjBot !== -1) {
            halfedges[adjBot] = adj;
        }
        halfedges[top] = bot;
        this.markFlip(edg);
        this.markFlip(lft);
        this.markFlip(adj);
        this.markFlip(rgt);
        // mark flips unconditionally
        flips.add(bot);
        consd.delete(bot);
        flips.add(top);
        consd.delete(top);
        this.updateVert(edg);
        this.updateVert(lft);
        this.updateVert(adj);
        this.updateVert(rgt);
        return bot;
    }
    /**
     * Whether the two triangles sharing edg conform to the Delaunay condition.
     * As a shortcut, if the given edge has no adjacent (is on the hull), it is
     * certainly Delaunay.
     *
     * @private
     * @param edg The edge shared by the triangles to test.
     * @return True if they are Delaunay.
     */
    isDelaunay(edg) {
        const { triangles, halfedges } = this.del, adj = halfedges[edg];
        if (adj === -1) {
            return true;
        }
        const p1 = triangles[prevEdge(edg)], p2 = triangles[edg], p3 = triangles[nextEdge(edg)], px = triangles[prevEdge(adj)];
        return !this.inCircle(p1, p2, p3, px);
    }
    /**
     * Update the vertex -> incoming edge map.
     *
     * @private
     * @param start The id of an *outgoing* edge.
     * @return The id of the right-most incoming edge.
     */
    updateVert(start) {
        const { triangles, halfedges } = this.del, vm = this.vertMap, v = triangles[start];
        // When iterating over incoming edges around a vertex, we do so in
        // clockwise order ('going left'). If the vertex lies on the hull, two
        // of the edges will have no opposite, leaving a gap. If the starting
        // incoming edge is not the right-most, we will miss edges between it
        // and the gap. So walk counter-clockwise until we find an edge on the
        // hull, or get back to where we started.
        let inc = prevEdge(start), adj = halfedges[inc];
        while (adj !== -1 && adj !== start) {
            inc = prevEdge(adj);
            adj = halfedges[inc];
        }
        vm[v] = inc;
        return inc;
    }
    /**
     * Whether the segment between [p1, p2] intersects with [p3, p4]. When the
     * segments share an end-point (e.g. p1 == p3 etc.), they are not considered
     * intersecting.
     *
     * @private
     * @param p1 The index of point 1 into this.del.coords.
     * @param p2 The index of point 2 into this.del.coords.
     * @param p3 The index of point 3 into this.del.coords.
     * @param p4 The index of point 4 into this.del.coords.
     * @return True if the segments intersect.
     */
    intersectSegments(p1, p2, p3, p4) {
        const pts = this.del.coords;
        // If the segments share one of the end-points, they cannot intersect
        // (provided the input is properly segmented, and the triangulation is
        // correct), but intersectSegments will say that they do. We can catch
        // it here already.
        if (p1 === p3 || p1 === p4 || p2 === p3 || p2 === p4) {
            return false;
        }
        return intersectSegments(pts[p1 * 2], pts[p1 * 2 + 1], pts[p2 * 2], pts[p2 * 2 + 1], pts[p3 * 2], pts[p3 * 2 + 1], pts[p4 * 2], pts[p4 * 2 + 1]);
    }
    /**
     * Whether point px is in the circumcircle of the triangle formed by p1, p2,
     * and p3 (which are in counter-clockwise order).
     *
     * @param p1 The index of point 1 into this.del.coords.
     * @param p2 The index of point 2 into this.del.coords.
     * @param p3 The index of point 3 into this.del.coords.
     * @param px The index of point x into this.del.coords.
     * @return True if (px, py) is in the circumcircle.
     */
    inCircle(p1, p2, p3, px) {
        const pts = this.del.coords;
        return incircle(pts[p1 * 2], pts[p1 * 2 + 1], pts[p2 * 2], pts[p2 * 2 + 1], pts[p3 * 2], pts[p3 * 2 + 1], pts[px * 2], pts[px * 2 + 1]) < 0.0;
    }
    /**
     * Whether point p1, p2, and p are collinear.
     *
     * @private
     * @param p1 The index of segment point 1 into this.del.coords.
     * @param p2 The index of segment point 2 into this.del.coords.
     * @param p The index of the point p into this.del.coords.
     * @return True if the points are collinear.
     */
    isCollinear(p1, p2, p) {
        const pts = this.del.coords;
        return orient2d(pts[p1 * 2], pts[p1 * 2 + 1], pts[p2 * 2], pts[p2 * 2 + 1], pts[p * 2], pts[p * 2 + 1]) === 0.0;
    }
}
Constrainautor.intersectSegments = intersectSegments;
/**
 * Compute if two line segments [p1, p2] and [p3, p4] intersect.
 *
 * @name Constrainautor.intersectSegments
 * @source https://github.com/mikolalysenko/robust-segment-intersect
 * @param p1x The x coordinate of point 1 of the first segment.
 * @param p1y The y coordinate of point 1 of the first segment.
 * @param p2x The x coordinate of point 2 of the first segment.
 * @param p2y The y coordinate of point 2 of the first segment.
 * @param p3x The x coordinate of point 1 of the second segment.
 * @param p3y The y coordinate of point 1 of the second segment.
 * @param p4x The x coordinate of point 2 of the second segment.
 * @param p4y The y coordinate of point 2 of the second segment.
 * @return True if the line segments intersect.
 */
function intersectSegments(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
    const x0 = orient2d(p1x, p1y, p3x, p3y, p4x, p4y), y0 = orient2d(p2x, p2y, p3x, p3y, p4x, p4y);
    if ((x0 > 0 && y0 > 0) || (x0 < 0 && y0 < 0)) {
        return false;
    }
    const x1 = orient2d(p3x, p3y, p1x, p1y, p2x, p2y), y1 = orient2d(p4x, p4y, p1x, p1y, p2x, p2y);
    if ((x1 > 0 && y1 > 0) || (x1 < 0 && y1 < 0)) {
        return false;
    }
    //Check for degenerate collinear case
    if (x0 === 0 && y0 === 0 && x1 === 0 && y1 === 0) {
        return !(Math.max(p3x, p4x) < Math.min(p1x, p2x) ||
            Math.max(p1x, p2x) < Math.min(p3x, p4x) ||
            Math.max(p3y, p4y) < Math.min(p1y, p2y) ||
            Math.max(p1y, p2y) < Math.min(p3y, p4y));
    }
    return true;
}

/**
 * @module intersect/chainSegments
 *
 * Chain disjoint line segments into ordered polylines and optionally
 * simplify by vertex spacing.
 *
 * Segments are chained by matching endpoints within a distance threshold
 * using a 3-D spatial hash for O(1) neighbour lookup.  The result is an
 * array of polylines (each an array of {x,y,z} points).
 *
 * Exports:
 *  - chainSegments(segments, threshold)
 *  - simplifyPolyline(points, spacing)
 */


/**
 * Chain an array of line segments into ordered polylines.
 *
 * Uses a 3-D spatial hash of segment endpoints so that each neighbour
 * lookup is O(1) amortised.  Each seed segment is extended in both
 * directions (head and tail) by repeatedly finding the nearest unused
 * segment endpoint within `threshold` distance.
 *
 * @param {Array<{ p0: {x:number,y:number,z:number}, p1: {x:number,y:number,z:number} }>} segments
 * @param {number} threshold - Maximum distance between endpoints to consider connected
 * @returns {Array<Array<{x:number,y:number,z:number}>>} Array of polylines
 */
function chainSegments(segments, threshold) {
    if (segments.length === 0) return [];

    // Build a spatial hash of segment endpoints for O(1) neighbor lookup
    var cellSize = threshold * 2;

    /** @type {Object.<string, Array<{segIdx:number, endIdx:number}>>} */
    var endpointMap = {};

    /**
     * Hash a point into a cell key.
     * @param {{ x: number, y: number, z: number }} p
     * @returns {string}
     */
    function pointHash(p) {
        var cx = Math.floor(p.x / cellSize);
        var cy = Math.floor(p.y / cellSize);
        var cz = Math.floor(p.z / cellSize);
        return cx + "," + cy + "," + cz;
    }

    /**
     * Return all 27 neighbouring cell keys (3x3x3 cube).
     * @param {{ x: number, y: number, z: number }} p
     * @returns {string[]}
     */
    function nearbyKeys(p) {
        var cx = Math.floor(p.x / cellSize);
        var cy = Math.floor(p.y / cellSize);
        var cz = Math.floor(p.z / cellSize);
        var keys = [];
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                for (var dz = -1; dz <= 1; dz++) {
                    keys.push((cx + dx) + "," + (cy + dy) + "," + (cz + dz));
                }
            }
        }
        return keys;
    }

    // Index all endpoints
    for (var i = 0; i < segments.length; i++) {
        var pts = [segments[i].p0, segments[i].p1];
        for (var e = 0; e < 2; e++) {
            var key = pointHash(pts[e]);
            if (!endpointMap[key]) endpointMap[key] = [];
            endpointMap[key].push({ segIdx: i, endIdx: e });
        }
    }

    var threshSq = threshold * threshold;
    var used = new Array(segments.length);
    for (var u = 0; u < used.length; u++) used[u] = false;

    /**
     * Find the nearest unused segment endpoint to a query point.
     * @param {{ x: number, y: number, z: number }} queryPt
     * @param {number} excludeSeg - Segment index to skip (-1 for none)
     * @returns {{ segIdx: number, endIdx: number } | null}
     */
    function findNearest(queryPt, excludeSeg) {
        var keys = nearbyKeys(queryPt);
        var bestDist = threshSq;
        var bestSeg = -1;
        var bestEnd = -1;
        for (var k = 0; k < keys.length; k++) {
            var bucket = endpointMap[keys[k]];
            if (!bucket) continue;
            for (var b = 0; b < bucket.length; b++) {
                var entry = bucket[b];
                if (used[entry.segIdx] || entry.segIdx === excludeSeg) continue;
                var pt = entry.endIdx === 0 ? segments[entry.segIdx].p0 : segments[entry.segIdx].p1;
                var d = distSq3(queryPt, pt);
                if (d < bestDist) {
                    bestDist = d;
                    bestSeg = entry.segIdx;
                    bestEnd = entry.endIdx;
                }
            }
        }
        return bestSeg >= 0 ? { segIdx: bestSeg, endIdx: bestEnd } : null;
    }

    var polylines = [];

    for (var s = 0; s < segments.length; s++) {
        if (used[s]) continue;
        used[s] = true;

        // Build chain as a deque (tail array grown forward, head array reversed later)
        var tailChain = [segments[s].p0, segments[s].p1];
        var headChain = [];

        // Extend tail
        var extending = true;
        while (extending) {
            extending = false;
            var tail = tailChain[tailChain.length - 1];
            var match = findNearest(tail, -1);
            if (match) {
                used[match.segIdx] = true;
                var seg = segments[match.segIdx];
                // match.endIdx is the end that matched our tail; push the OTHER end
                if (match.endIdx === 0) {
                    tailChain.push(seg.p1);
                } else {
                    tailChain.push(seg.p0);
                }
                extending = true;
            }
        }

        // Extend head (grow headChain forward, reverse later)
        extending = true;
        while (extending) {
            extending = false;
            var head = headChain.length > 0 ? headChain[headChain.length - 1] : tailChain[0];
            var match2 = findNearest(head, -1);
            if (match2) {
                used[match2.segIdx] = true;
                var seg2 = segments[match2.segIdx];
                if (match2.endIdx === 0) {
                    headChain.push(seg2.p1);
                } else {
                    headChain.push(seg2.p0);
                }
                extending = true;
            }
        }

        // Combine: reverse headChain + tailChain
        if (headChain.length > 0) {
            headChain.reverse();
            var chain = headChain.concat(tailChain);
            polylines.push(chain);
        } else {
            polylines.push(tailChain);
        }
    }

    return polylines;
}

/**
 * Simplify a polyline by enforcing a minimum vertex spacing.
 *
 * Walks the polyline from the first point to the last, accumulating
 * distance.  Intermediate vertices are only kept when the accumulated
 * distance since the last kept vertex reaches or exceeds `spacing`.
 * The first and last points are always preserved.
 *
 * @param {Array<{x:number,y:number,z:number}>} points - Ordered polyline vertices
 * @param {number} spacing - Minimum distance between kept vertices (0 = keep all)
 * @returns {Array<{x:number,y:number,z:number}>} Simplified polyline
 */
function simplifyPolyline(points, spacing) {
    if (points.length <= 2 || spacing <= 0) return points;

    var result = [points[0]];
    var accumulated = 0;

    for (var i = 1; i < points.length - 1; i++) {
        accumulated += dist3(points[i - 1], points[i]);
        if (accumulated >= spacing) {
            result.push(points[i]);
            accumulated = 0;
        }
    }

    // Always keep last point
    result.push(points[points.length - 1]);

    return result;
}

/**
 * @module boolean/splitTriangles
 *
 * Re-triangulation of crossed triangles. Primary method is fan triangulation:
 * chain intersection segments into an ordered polyline, then fan from each
 * original vertex to sequential chain points. Falls back to CDT when the
 * geometry is too complex (multiple polylines, same-edge entry/exit).
 */


/**
 * Re-triangulate a crossed triangle by inserting all intersection segment
 * endpoints as Steiner points and running Constrained Delaunay Triangulation.
 *
 * This handles the case where a large triangle is crossed by many small
 * triangles on the other surface, producing many short segments whose
 * endpoints lie interior to the large triangle.
 *
 * Steps:
 *   1. Build local 2D frame + barycentric validator
 *   2. Collect unique segment endpoints, validate inside triangle
 *   3. Run Delaunator, constrain segment edges (NOT boundary edges)
 *   4. Filter sub-triangles by barycentric centroid test + area check
 *
 * @param {{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }} tri - Parent triangle
 * @param {Array<{ p0: {x,y,z}, p1: {x,y,z} }>} segments - Intersection segments crossing this triangle
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Sub-triangles, or [tri] on failure
 */
function retriangulateWithSteinerPoints(tri, segments) {
	if (!segments || segments.length === 0) return [tri];

	// -- Step 1: Build local 2D coordinate frame on triangle plane --

	var e1x = tri.v1.x - tri.v0.x;
	var e1y = tri.v1.y - tri.v0.y;
	var e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x;
	var e2y = tri.v2.y - tri.v0.y;
	var e2z = tri.v2.z - tri.v0.z;

	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return [tri];
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;

	var lnx = e1y * e2z - e1z * e2y;
	var lny = e1z * e2x - e1x * e2z;
	var lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return [tri];

	var lvx = lny * luz - lnz * luy;
	var lvy = lnz * lux - lnx * luz;
	var lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return [tri];
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	var lox = tri.v0.x, loy = tri.v0.y, loz = tri.v0.z;

	/**
	 * Project a 3D point to local 2D.
	 * @param {{ x: number, y: number, z: number }} p
	 * @returns {number[]} [u, v]
	 */
	function toLocal(p) {
		var dx = p.x - lox, dy = p.y - loy, dz = p.z - loz;
		return [dx * lux + dy * luy + dz * luz, dx * lvx + dy * lvy + dz * lvz];
	}

	// Triangle vertices in local 2D
	var l0 = toLocal(tri.v0); // (0, 0) by construction
	var l1 = toLocal(tri.v1);
	var l2 = toLocal(tri.v2);

	// Barycentric coordinate calculator in local 2D
	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return [tri]; // degenerate

	/**
	 * Compute barycentric coordinates [u, v, w]; inside when all >= 0.
	 * @param {number} pu
	 * @param {number} pv
	 * @returns {number[]}
	 */
	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	// Triangle area in local 2D (for sub-triangle area filtering)
	var triArea2D = Math.abs(baryD) * 0.5;
	var MIN_AREA_RATIO = 1e-8; // discard sub-tris smaller than this fraction of original

	// -- Step 2: Collect unique segment endpoints, validate inside triangle --

	var PREC = 6;
	var seen = {};
	var v0Key = tri.v0.x.toFixed(PREC) + "," + tri.v0.y.toFixed(PREC) + "," + tri.v0.z.toFixed(PREC);
	var v1Key = tri.v1.x.toFixed(PREC) + "," + tri.v1.y.toFixed(PREC) + "," + tri.v1.z.toFixed(PREC);
	var v2Key = tri.v2.x.toFixed(PREC) + "," + tri.v2.y.toFixed(PREC) + "," + tri.v2.z.toFixed(PREC);
	seen[v0Key] = true;
	seen[v1Key] = true;
	seen[v2Key] = true;

	var BARY_TOL = -1e-4; // allow points slightly outside due to float precision
	var validSteiner = [];

	// Track segment endpoint keys -> index in pts array for constraining segment edges
	var keyToIndex = {};
	keyToIndex[v0Key] = 0;
	keyToIndex[v1Key] = 1;
	keyToIndex[v2Key] = 2;

	for (var s = 0; s < segments.length; s++) {
		var seg = segments[s];
		var endpts = [seg.p0, seg.p1];
		for (var e = 0; e < 2; e++) {
			var p = endpts[e];
			var key = p.x.toFixed(PREC) + "," + p.y.toFixed(PREC) + "," + p.z.toFixed(PREC);
			if (seen[key]) continue;
			seen[key] = true;

			// Validate: must be inside the triangle (barycentric check)
			var lp = toLocal(p);
			var bc = baryCoords(lp[0], lp[1]);
			if (bc[0] < BARY_TOL || bc[1] < BARY_TOL || bc[2] < BARY_TOL) {
				continue; // outside triangle -- discard
			}

			validSteiner.push({ x: p.x, y: p.y, z: p.z, key: key });
		}
	}

	if (validSteiner.length === 0) return [tri];

	// Build pts array: indices 0,1,2 = original vertices, 3+ = Steiner
	var pts = [
		{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
		{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
		{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
	];
	for (var vi = 0; vi < validSteiner.length; vi++) {
		keyToIndex[validSteiner[vi].key] = pts.length;
		pts.push(validSteiner[vi]);
	}

	// -- Step 3: Project all to local 2D, run Delaunator --

	var n = pts.length;
	var coords = new Float64Array(n * 2);
	for (var j = 0; j < n; j++) {
		var lj = toLocal(pts[j]);
		coords[j * 2] = lj[0];
		coords[j * 2 + 1] = lj[1];
	}

	var del;
	try {
		del = new Delaunator(coords);
	} catch (de) {
		return [tri];
	}

	// Constrain segment edges (NOT boundary edges -- those are the convex hull already).
	// Boundary constraints are harmful when Steiner points lie on boundary edges,
	// because constrainOne(0,1) would skip intermediate points on edge 0->1.
	try {
		var con = new Constrainautor(del);
		for (var cs = 0; cs < segments.length; cs++) {
			var cSeg = segments[cs];
			var k0 = cSeg.p0.x.toFixed(PREC) + "," + cSeg.p0.y.toFixed(PREC) + "," + cSeg.p0.z.toFixed(PREC);
			var k1 = cSeg.p1.x.toFixed(PREC) + "," + cSeg.p1.y.toFixed(PREC) + "," + cSeg.p1.z.toFixed(PREC);
			var idx0 = keyToIndex[k0];
			var idx1 = keyToIndex[k1];
			if (idx0 !== undefined && idx1 !== undefined && idx0 !== idx1) {
				try { con.constrainOne(idx0, idx1); } catch (ce2) { /* skip */ }
			}
		}
	} catch (ce) {
		// Constrainautor init failed -- unconstrained Delaunator is still usable
	}

	// -- Step 4: Filter sub-triangles by barycentric centroid + area check --

	var result = [];
	var delTris = del.triangles;
	for (var k = 0; k < delTris.length; k += 3) {
		var a = delTris[k], b = delTris[k + 1], c = delTris[k + 2];

		// Centroid in local 2D
		var cx = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cy = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;

		// Barycentric centroid test (more tolerant than ray-cast PIP for boundary)
		var cBary = baryCoords(cx, cy);
		if (cBary[0] < -1e-6 || cBary[1] < -1e-6 || cBary[2] < -1e-6) continue;

		// Area check -- discard degenerate sub-triangles
		var au = coords[a * 2], av = coords[a * 2 + 1];
		var bu = coords[b * 2], bv = coords[b * 2 + 1];
		var cu = coords[c * 2], cv = coords[c * 2 + 1];
		var subArea = Math.abs((bu - au) * (cv - av) - (cu - au) * (bv - av)) * 0.5;
		if (subArea < triArea2D * MIN_AREA_RATIO) continue;

		result.push({
			v0: pts[a],
			v1: pts[b],
			v2: pts[c]
		});
	}

	if (result.length === 0) {
		return [tri];
	}

	return result;
}

/**
 * Fan-based re-triangulation of a crossed triangle.
 *
 * Chains the intersection segments into an ordered polyline, identifies
 * which original vertices are on which side of the polyline, then creates
 * fan triangles from each original vertex to sequential chain points.
 * Every sub-triangle has at least 1 original vertex — no all-Steiner
 * "pocket" triangles.
 *
 * Two sub-triangle types:
 *   - Fan triangle:       1 original vert + 2 sequential chain points
 *   - Transition triangle: 2 original verts + 1 chain point (where fans meet)
 *
 * Falls back to CDT ({@link retriangulateWithSteinerPoints}) for:
 *   - Multiple disconnected polylines
 *   - Entry/exit on the same edge
 *   - Chaining failure
 *
 * @param {{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }} tri - Parent triangle
 * @param {Array<{ p0: {x,y,z}, p1: {x,y,z} }>} segments - Intersection segments
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Sub-triangles
 */
function fanTriangulate(tri, segments) {
	if (!segments || segments.length === 0) return [tri];

	// Step 1) Estimate avg segment length for chaining threshold
	var avgLen = 0;
	for (var si = 0; si < segments.length; si++) {
		var dx = segments[si].p1.x - segments[si].p0.x;
		var dy = segments[si].p1.y - segments[si].p0.y;
		var dz = segments[si].p1.z - segments[si].p0.z;
		avgLen += Math.sqrt(dx * dx + dy * dy + dz * dz);
	}
	avgLen /= segments.length;
	var chains = chainSegments(segments, avgLen * 0.1);

	// Step 2) Fallback to CDT for multi-chain or empty-chain cases
	if (chains.length !== 1 || chains[0].length < 2) {
		return retriangulateWithSteinerPoints(tri, segments);
	}
	var chain = chains[0];

	// Step 3) Build local 2D frame for barycentric classification
	var verts = [tri.v0, tri.v1, tri.v2];
	var e1x = tri.v1.x - tri.v0.x, e1y = tri.v1.y - tri.v0.y, e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x, e2y = tri.v2.y - tri.v0.y, e2z = tri.v2.z - tri.v0.z;
	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return retriangulateWithSteinerPoints(tri, segments);
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;
	var lnx = e1y * e2z - e1z * e2y, lny = e1z * e2x - e1x * e2z, lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return retriangulateWithSteinerPoints(tri, segments);
	var lvx = lny * luz - lnz * luy, lvy = lnz * lux - lnx * luz, lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return retriangulateWithSteinerPoints(tri, segments);
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	function toLocal(p) {
		var ddx = p.x - tri.v0.x, ddy = p.y - tri.v0.y, ddz = p.z - tri.v0.z;
		return [ddx * lux + ddy * luy + ddz * luz, ddx * lvx + ddy * lvy + ddz * lvz];
	}
	var l0 = toLocal(tri.v0), l1 = toLocal(tri.v1), l2 = toLocal(tri.v2);
	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return retriangulateWithSteinerPoints(tri, segments);

	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	// Step 4) Identify which edges the entry (chain[0]) and exit (chain[N]) lie on
	// bc[0] near 0 → on edge v1-v2 (opposite v0)
	// bc[1] near 0 → on edge v0-v2 (opposite v1)
	// bc[2] near 0 → on edge v0-v1 (opposite v2)
	var EDGE_TOL = 0.02;
	var VERTEX_TOL = 0.02;
	var entryLocal = toLocal(chain[0]);
	var exitLocal = toLocal(chain[chain.length - 1]);
	var entryBary = baryCoords(entryLocal[0], entryLocal[1]);
	var exitBary = baryCoords(exitLocal[0], exitLocal[1]);

	// Step 4a) If a chain endpoint is AT an original vertex (two bary coords near 0),
	// the intersection passes through a vertex — fall back to CDT for this complex case.
	function isAtVertex(bc) {
		var nearZero = 0;
		for (var bci = 0; bci < 3; bci++) { if (bc[bci] < VERTEX_TOL) nearZero++; }
		return nearZero >= 2;
	}
	if (isAtVertex(entryBary) || isAtVertex(exitBary)) {
		return retriangulateWithSteinerPoints(tri, segments);
	}

	// Determine which edge each boundary point lies on (returns the vertex index opposite that edge)
	function edgeOf(bc) {
		if (bc[0] < EDGE_TOL && bc[0] <= bc[1] && bc[0] <= bc[2]) return 0; // on v1-v2
		if (bc[1] < EDGE_TOL && bc[1] <= bc[0] && bc[1] <= bc[2]) return 1; // on v0-v2
		if (bc[2] < EDGE_TOL && bc[2] <= bc[0] && bc[2] <= bc[1]) return 2; // on v0-v1
		return -1;
	}
	var entryOpp = edgeOf(entryBary);
	var exitOpp = edgeOf(exitBary);

	// Fallback if boundary points are interior or on same edge
	if (entryOpp < 0 || exitOpp < 0 || entryOpp === exitOpp) {
		return retriangulateWithSteinerPoints(tri, segments);
	}

	// Step 5) Find corner vertex: the vertex NOT opposite either entry or exit edge.
	// entryOpp is opposite the entry edge, exitOpp is opposite the exit edge.
	// The corner is the remaining vertex — it's shared by both crossed edges.
	var cornerIdx = -1;
	for (var ci = 0; ci < 3; ci++) {
		if (ci !== entryOpp && ci !== exitOpp) { cornerIdx = ci; break; }
	}
	if (cornerIdx < 0) return retriangulateWithSteinerPoints(tri, segments);

	var corner = verts[cornerIdx];
	// vA is on the entry edge (the vertex opposite the exit edge, that is not the corner)
	var vA = verts[exitOpp];
	// vB is on the exit edge (the vertex opposite the entry edge, that is not the corner)
	var vB = verts[entryOpp];

	// Step 6) Compute original triangle normal for winding consistency
	var origNx = e1y * e2z - e1z * e2y;
	var origNy = e1z * e2x - e1x * e2z;
	var origNz = e1x * e2y - e1y * e2x;

	// Helper: create a sub-triangle with winding consistent with original
	function makeTri(a, b, c) {
		var se1x = b.x - a.x, se1y = b.y - a.y, se1z = b.z - a.z;
		var se2x = c.x - a.x, se2y = c.y - a.y, se2z = c.z - a.z;
		var snx = se1y * se2z - se1z * se2y;
		var sny = se1z * se2x - se1x * se2z;
		var snz = se1x * se2y - se1y * se2x;
		var dot = snx * origNx + sny * origNy + snz * origNz;
		if (dot < 0) {
			return { v0: a, v1: c, v2: b };
		}
		return { v0: a, v1: b, v2: c };
	}

	// Step 7) Build fan triangles
	var result = [];

	// Step 7a) Isolated side: fan from corner to all consecutive chain point pairs
	for (var fi = 0; fi < chain.length - 1; fi++) {
		result.push(makeTri(corner, chain[fi], chain[fi + 1]));
	}

	// Step 7b) Paired side: find split index K by nearest-neighbour.
	// K is where the chain transitions from closer-to-vA to closer-to-vB.
	var splitK = 0;
	var bestRatio = Infinity;
	for (var ki = 0; ki < chain.length; ki++) {
		var dA = distSq3(vA, chain[ki]);
		var dB = distSq3(vB, chain[ki]);
		var ratio = (dA < 1e-20 || dB < 1e-20) ? Infinity : (dA < dB ? dA / dB : dB / dA);
		var diff = Math.abs(1.0 - ratio);
		if (diff < bestRatio) {
			bestRatio = diff;
			splitK = ki;
		}
	}

	// Step 7c) Clamp splitK so both fans get at least one triangle
	if (splitK < 1) splitK = 1;
	if (splitK > chain.length - 2) splitK = chain.length - 2;

	// Step 7d) Fan from vA: P0 through PK
	for (var ai = 0; ai < splitK; ai++) {
		result.push(makeTri(vA, chain[ai], chain[ai + 1]));
	}

	// Step 7e) Transition triangle: vA - chain[splitK] - vB
	result.push(makeTri(vA, chain[splitK], vB));

	// Step 7f) Fan from vB: PK through PN
	for (var bi = splitK; bi < chain.length - 1; bi++) {
		result.push(makeTri(vB, chain[bi], chain[bi + 1]));
	}

	// Step 9) Validate: check no degenerate (near-zero area) sub-triangles
	var triArea = lnLen * 0.5;
	var MIN_AREA = triArea * 1e-8;
	var validated = [];
	for (var vli = 0; vli < result.length; vli++) {
		var t = result[vli];
		var te1x = t.v1.x - t.v0.x, te1y = t.v1.y - t.v0.y, te1z = t.v1.z - t.v0.z;
		var te2x = t.v2.x - t.v0.x, te2y = t.v2.y - t.v0.y, te2z = t.v2.z - t.v0.z;
		var tcx = te1y * te2z - te1z * te2y;
		var tcy = te1z * te2x - te1x * te2z;
		var tcz = te1x * te2y - te1y * te2x;
		var subArea = Math.sqrt(tcx * tcx + tcy * tcy + tcz * tcz) * 0.5;
		if (subArea > MIN_AREA) {
			validated.push(t);
		}
	}

	if (validated.length === 0) {
		return retriangulateWithSteinerPoints(tri, segments);
	}

	return validated;
}

/**
 * @module boolean/classifyTriangles
 *
 * Triangle classification for boolean operations. Uses multi-axis ray casting
 * (majority vote across Z, X, Y) to determine whether triangles lie inside or
 * outside the other mesh, with flood-fill propagation for efficient bulk
 * classification and CDT-based splitting for straddling (crossed) triangles.
 *
 * Sub-triangles from CDT splits are classified via vertex adjacency (inheriting
 * from non-crossed neighbors) with ray-cast fallback only when no adjacent
 * non-crossed triangle exists.
 */


// Deterministic jitter offsets for avoiding edge/coplanar ray hits.
// 3 offsets per axis, each pair (da, db) shifts the ray's 2D position slightly.
// Different offsets per axis to avoid correlated edge hits on axis-aligned geometry.
var JITTERS = {
	z: [
		{ da: 0.0000537, db: 0.0000241 },
		{ da: -319e-7, db: 0.0000673 },
		{ da: 0.0000157, db: -489e-7 }
	],
	x: [
		{ da: 0.0000443, db: -317e-7 },
		{ da: -261e-7, db: 0.0000559 },
		{ da: 0.0000189, db: 0.0000371 }
	],
	y: [
		{ da: -397e-7, db: 0.0000283 },
		{ da: 0.0000521, db: -447e-7 },
		{ da: -173e-7, db: 0.0000613 }
	]
};

/**
 * Cast a single ray on one axis and count positive-direction hits.
 *
 * @param {number} pa - First projection coordinate (possibly jittered)
 * @param {number} pb - Second projection coordinate (possibly jittered)
 * @param {number} pr - Ray-axis coordinate (not jittered)
 * @param {Array} candidates - Triangle indices from spatial grid query
 * @param {Array} otherTris - Other surface triangles
 * @param {string} axis - 'z', 'x', or 'y'
 * @returns {number} Count of positive-direction hits
 */
function castRayOnAxis(pa, pb, pr, candidates, otherTris, axis) {
	var countPos = 0;

	for (var c = 0; c < candidates.length; c++) {
		var tri = otherTris[candidates[c]];

		// Extract the 2 projection coords + ray coord for each vertex
		var a0, b0, r0, a1, b1, r1, a2, b2, r2;
		if (axis === "z") {
			a0 = tri.v0.x; b0 = tri.v0.y; r0 = tri.v0.z;
			a1 = tri.v1.x; b1 = tri.v1.y; r1 = tri.v1.z;
			a2 = tri.v2.x; b2 = tri.v2.y; r2 = tri.v2.z;
		} else if (axis === "x") {
			a0 = tri.v0.y; b0 = tri.v0.z; r0 = tri.v0.x;
			a1 = tri.v1.y; b1 = tri.v1.z; r1 = tri.v1.x;
			a2 = tri.v2.y; b2 = tri.v2.z; r2 = tri.v2.x;
		} else {
			a0 = tri.v0.x; b0 = tri.v0.z; r0 = tri.v0.y;
			a1 = tri.v1.x; b1 = tri.v1.z; r1 = tri.v1.y;
			a2 = tri.v2.x; b2 = tri.v2.z; r2 = tri.v2.y;
		}

		// Barycentric test in (a, b) projection
		var d = (b1 - b2) * (a0 - a2) + (a2 - a1) * (b0 - b2);
		if (Math.abs(d) < 1e-12) continue; // degenerate projection

		var u = ((b1 - b2) * (pa - a2) + (a2 - a1) * (pb - b2)) / d;
		var v = ((b2 - b0) * (pa - a2) + (a0 - a2) * (pb - b2)) / d;
		var w = 1 - u - v;

		if (u < -1e-10 || v < -1e-10 || w < -1e-10) continue; // outside triangle

		// Interpolate ray-axis coord at (pa, pb) on the triangle's plane
		var rHit = u * r0 + v * r1 + w * r2;

		if (rHit > pr) countPos++;
	}

	return countPos;
}

/**
 * Classify a point on a single axis by casting 3 jittered rays and taking
 * the majority vote.  Each ray is offset slightly in the 2D projection
 * plane to avoid hitting triangle edges/vertices exactly.
 *
 * Projects point and triangles onto a 2D plane for the given axis:
 *   - axis='z': project to XY, ray along +Z
 *   - axis='x': project to YZ, ray along +X
 *   - axis='y': project to XZ, ray along +Y
 *
 * @param {{ x: number, y: number, z: number }} point - Point to classify
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} grid - Spatial grid for the relevant 2D projection
 * @param {number} cellSize - Grid cell size
 * @param {string} axis - 'z', 'x', or 'y'
 * @returns {number} 0 = no hits (no vote), 1 = inside (odd majority), 2 = outside (even majority)
 */
function classifyPointOnAxis(point, otherTris, grid, cellSize, axis) {
	// Base 2D coordinates and ray-axis coordinate
	var basePa, basePb, pr;
	if (axis === "z") {
		basePa = point.x; basePb = point.y; pr = point.z;
	} else if (axis === "x") {
		basePa = point.y; basePb = point.z; pr = point.x;
	} else {
		basePa = point.x; basePb = point.z; pr = point.y;
	}

	var jitters = JITTERS[axis];
	var insideVotes = 0;
	var hadHits = 0;

	for (var j = 0; j < 3; j++) {
		var pa = basePa + jitters[j].da;
		var pb = basePb + jitters[j].db;

		// Query spatial grid at jittered position
		var candidates;
		if (axis === "z") {
			candidates = queryGrid(grid, { minX: pa, maxX: pa, minY: pb, maxY: pb }, cellSize);
		} else {
			candidates = queryGridOnAxes(grid, pa, pb, cellSize);
		}

		var count = castRayOnAxis(pa, pb, pr, candidates, otherTris, axis);

		if (count > 0) hadHits++;
		if (count % 2 === 1) insideVotes++;
	}

	// 3-state return: 0 = no hits (no vote), 1 = inside, 2 = outside
	if (hadHits === 0) return 0;         // no ray hit anything → no vote
	return insideVotes >= 2 ? 1 : 2;     // majority inside → 1, majority outside → 2
}

/**
 * Multi-axis point classification using majority vote across all 3 axes.
 *
 * Casts +Z, +X, and +Y rays (3 jittered rays per axis) and classifies by majority vote:
 *   - Each axis returns 0 (no hits/no vote), 1 (inside), or 2 (outside)
 *   - If 2+ axes vote "inside" -> inside (handles any wall angle)
 *   - If only 1 axis votes "inside" and 1+ vote "outside" -> outside (prevents false positives)
 *   - If only 1 axis has hits at all -> trust that single result
 *   - If 0 axes have hits -> outside
 *
 * This handles any geometry angle (0-90 deg walls) without thresholds.
 *
 * @param {{ x: number, y: number, z: number }} point - Point to classify
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} grids - { xy: {grid, cellSize}, yz: {grid, cellSize}, xz: {grid, cellSize} }
 * @returns {number} 1 = inside, -1 = outside
 */
function classifyPointMultiAxis(point, otherTris, grids) {
	var zCount = classifyPointOnAxis(point, otherTris, grids.xy.grid, grids.xy.cellSize, "z");
	var xCount = classifyPointOnAxis(point, otherTris, grids.yz.grid, grids.yz.cellSize, "x");
	var yCount = classifyPointOnAxis(point, otherTris, grids.xz.grid, grids.xz.cellSize, "y");

	// 0 = no hits (no vote), 1 = inside, 2 = outside
	var insideVotes = 0;
	var outsideVotes = 0;

	if (zCount === 1) insideVotes++;
	else if (zCount === 2) outsideVotes++;

	if (xCount === 1) insideVotes++;
	else if (xCount === 2) outsideVotes++;

	if (yCount === 1) insideVotes++;
	else if (yCount === 2) outsideVotes++;

	// Majority vote: 2+ inside -> inside; otherwise outside
	if (insideVotes >= 2) return 1;
	if (outsideVotes >= 1) return -1;

	// Only one axis had hits and it voted inside — trust it
	if (insideVotes === 1) return 1;

	// No axes had any hits -> outside
	return -1;
}

/**
 * Classify triangles using flood fill from intersection boundary.
 *
 * Non-crossed triangles are partitioned into connected components via shared
 * edges (excluding edges shared with crossed triangles). Each component is
 * classified by a single seed triangle using multi-axis ray casting against
 * the other surface, then that classification is propagated to the entire
 * component.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup to classify
 * @param {Object} crossedMap - Map of triIndex -> [taggedSegments]
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} otherGrids - { xy: {grid, cellSize}, yz: {grid, cellSize}, xz: {grid, cellSize} }
 * @returns {Int8Array} Classification per triangle: 1=inside, -1=outside
 */
function classifyByFloodFill(tris, crossedMap, otherTris, otherGrids) {
	var n = tris.length;
	var result = new Int8Array(n);

	// Build edge adjacency for non-crossed triangles only
	var PREC = 6;
	function vk(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}

	var edgeToTris = {};
	for (var i = 0; i < n; i++) {
		if (crossedMap[i]) continue; // skip crossed triangles
		var tri = tris[i];
		var k0 = vk(tri.v0), k1 = vk(tri.v1), k2 = vk(tri.v2);
		var edges = [
			k0 < k1 ? k0 + "|" + k1 : k1 + "|" + k0,
			k1 < k2 ? k1 + "|" + k2 : k2 + "|" + k1,
			k2 < k0 ? k2 + "|" + k0 : k0 + "|" + k2
		];
		for (var e = 0; e < 3; e++) {
			if (!edgeToTris[edges[e]]) edgeToTris[edges[e]] = [];
			edgeToTris[edges[e]].push(i);
		}
	}

	// Build neighbor list from shared edges (non-crossed only)
	var neighbors = new Array(n);
	for (var ni = 0; ni < n; ni++) neighbors[ni] = [];

	for (var ek in edgeToTris) {
		var triList = edgeToTris[ek];
		for (var a = 0; a < triList.length; a++) {
			for (var b = a + 1; b < triList.length; b++) {
				neighbors[triList[a]].push(triList[b]);
				neighbors[triList[b]].push(triList[a]);
			}
		}
	}

	// BFS flood fill -- find connected components, classify each by one seed
	var visited = new Uint8Array(n);

	for (var seed = 0; seed < n; seed++) {
		if (visited[seed] || crossedMap[seed]) continue;

		// Classify seed via multi-axis ray casting against other surface
		var seedTri = tris[seed];
		var cx = (seedTri.v0.x + seedTri.v1.x + seedTri.v2.x) / 3;
		var cy = (seedTri.v0.y + seedTri.v1.y + seedTri.v2.y) / 3;
		var cz = (seedTri.v0.z + seedTri.v1.z + seedTri.v2.z) / 3;
		var seedClass = classifyPointMultiAxis(
			{ x: cx, y: cy, z: cz },
			otherTris, otherGrids
		);

		// BFS: propagate seed classification to entire component
		var queue = [seed];
		visited[seed] = 1;
		result[seed] = seedClass;

		var head = 0;
		while (head < queue.length) {
			var curr = queue[head++];
			var nbrs = neighbors[curr];
			for (var ni2 = 0; ni2 < nbrs.length; ni2++) {
				var nb = nbrs[ni2];
				if (!visited[nb]) {
					visited[nb] = 1;
					result[nb] = seedClass;
					queue.push(nb);
				}
			}
		}
	}

	return result;
}

/**
 * Separate triangles into inside/outside groups.
 *
 * Non-crossed triangles go directly by their pre-computed classification.
 * Crossed (straddling) triangles are re-triangulated with Steiner points
 * at intersection segment endpoints, then each sub-triangle is classified
 * via vertex adjacency (inheriting classification from adjacent non-crossed
 * triangles) with ray-cast fallback.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {Int8Array} classifications - Per-triangle classification (1=inside, -1=outside)
 * @param {Object} crossedMap - Map of triIndex -> [taggedSegments]
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} otherTris - Other surface triangles
 * @param {Object} otherGrids - { xy: {grid, cellSize}, yz: {grid, cellSize}, xz: {grid, cellSize} }
 * @param {string} otherIdxKey - Key to get other mesh's triangle index from tagged segments ("idxA" or "idxB")
 * @returns {{ inside: Array, outside: Array }} Classified triangle groups
 */
function splitStraddlingAndClassify(tris, classifications, crossedMap, otherTris, otherGrids, otherIdxKey) {
	var inside = [];
	var outside = [];

	var PREC = 6;
	function vk(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}

	// Step A: Build vertex-key -> classification map from NON-CROSSED triangles.
	// Each original mesh vertex that belongs to at least one non-crossed triangle
	// gets the flood-fill classification of that triangle.
	var vertexClassMap = {};
	for (var i = 0; i < tris.length; i++) {
		if (crossedMap[i]) continue; // skip crossed triangles
		var cls = classifications[i];
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		for (var vi = 0; vi < 3; vi++) {
			var key = vk(verts[vi]);
			if (vertexClassMap[key] === undefined) {
				vertexClassMap[key] = cls;
			}
		}
	}

	// Step B: Collect all Steiner point keys (intersection segment endpoints).
	// These vertices lie ON the intersection line — skip them for classification.
	var steinerKeys = {};
	for (var ci in crossedMap) {
		var segs = crossedMap[ci];
		for (var s = 0; s < segs.length; s++) {
			steinerKeys[vk(segs[s].p0)] = true;
			steinerKeys[vk(segs[s].p1)] = true;
		}
	}

	// Step C: Collect ALL intersection segments into a flat list for half-space lookups.
	// Also build edge-key maps for border-segment classification in Step D0.
	var allSegments = [];
	var segEdgeSet = {};
	var segEdgeToSeg = {};
	for (var asi in crossedMap) {
		var aSegs = crossedMap[asi];
		for (var asj = 0; asj < aSegs.length; asj++) {
			allSegments.push(aSegs[asj]);
			var esk0 = vk(aSegs[asj].p0);
			var esk1 = vk(aSegs[asj].p1);
			var esKey = esk0 < esk1 ? esk0 + "|" + esk1 : esk1 + "|" + esk0;
			segEdgeSet[esKey] = true;
			segEdgeToSeg[esKey] = aSegs[asj];
		}
	}

	// Step C1) Calibrate the normal sign convention.
	// The host triangle's face normal determines which side is "inside". We sample
	// a few intersection segments, offset a point along the other mesh's face normal,
	// and ray-cast to verify the convention. Majority vote sets normalSign.
	var normalSign = 1;
	if (allSegments.length > 0) {
		var votePlus = 0, voteMinus = 0;
		var samplesToCheck = Math.min(allSegments.length, 12);
		var sampleStep = Math.max(1, Math.floor(allSegments.length / samplesToCheck));
		for (var calIdx = 0; calIdx < allSegments.length && (votePlus + voteMinus) < samplesToCheck; calIdx += sampleStep) {
			var calSeg = allSegments[calIdx];
			var calTri = otherTris[calSeg[otherIdxKey]];
			if (!calTri) continue;
			// Step C1a) Compute the other mesh's triangle normal
			var ce1x = calTri.v1.x - calTri.v0.x, ce1y = calTri.v1.y - calTri.v0.y, ce1z = calTri.v1.z - calTri.v0.z;
			var ce2x = calTri.v2.x - calTri.v0.x, ce2y = calTri.v2.y - calTri.v0.y, ce2z = calTri.v2.z - calTri.v0.z;
			var cnx = ce1y * ce2z - ce1z * ce2y;
			var cny = ce1z * ce2x - ce1x * ce2z;
			var cnz = ce1x * ce2y - ce1y * ce2x;
			var cnLen = Math.sqrt(cnx * cnx + cny * cny + cnz * cnz);
			if (cnLen < 1e-12) continue;
			cnx /= cnLen; cny /= cnLen; cnz /= cnLen;
			// Step C1b) Pick the dominant normal axis for a reliable single-axis ray-cast.
			var absNx = Math.abs(cnx), absNy = Math.abs(cny), absNz = Math.abs(cnz);
			var calAxis, calGrid, calCellSize;
			if (absNz >= absNx && absNz >= absNy) {
				calAxis = "z";
				calGrid = otherGrids.xy.grid;
				calCellSize = otherGrids.xy.cellSize;
			} else if (absNx >= absNy) {
				calAxis = "x";
				calGrid = otherGrids.yz.grid;
				calCellSize = otherGrids.yz.cellSize;
			} else {
				calAxis = "y";
				calGrid = otherGrids.xz.grid;
				calCellSize = otherGrids.xz.cellSize;
			}
			// Step C1c) Segment midpoint, offset in the +normal direction
			var calMx = (calSeg.p0.x + calSeg.p1.x) / 2;
			var calMy = (calSeg.p0.y + calSeg.p1.y) / 2;
			var calMz = (calSeg.p0.z + calSeg.p1.z) / 2;
			var offset = 0.05;
			var calPt = { x: calMx + cnx * offset, y: calMy + cny * offset, z: calMz + cnz * offset };
			// Step C1d) Single-axis ray-cast: 0 = no hits, 1 = inside, 2 = outside
			var calResult = classifyPointOnAxis(calPt, otherTris, calGrid, calCellSize, calAxis);
			if (calResult === 0) continue;
			if (calResult === 1) voteMinus++;
			else votePlus++;
		}
		if (voteMinus > votePlus) normalSign = -1;
	}
	function halfSpaceTest(point, tolerance) {
		if (allSegments.length === 0) return 0;
		var tol = (tolerance !== undefined) ? tolerance : 1e-10;
		var bestSeg = allSegments[0];
		var bestDist = Infinity;
		for (var hi = 0; hi < allSegments.length; hi++) {
			var hmx = (allSegments[hi].p0.x + allSegments[hi].p1.x) / 2;
			var hmy = (allSegments[hi].p0.y + allSegments[hi].p1.y) / 2;
			var hmz = (allSegments[hi].p0.z + allSegments[hi].p1.z) / 2;
			var hdx = point.x - hmx, hdy = point.y - hmy, hdz = point.z - hmz;
			var hd2 = hdx * hdx + hdy * hdy + hdz * hdz;
			if (hd2 < bestDist) { bestDist = hd2; bestSeg = allSegments[hi]; }
		}
		var hOtherTri = otherTris[bestSeg[otherIdxKey]];
		if (!hOtherTri) return 0;
		var he1x = hOtherTri.v1.x - hOtherTri.v0.x;
		var he1y = hOtherTri.v1.y - hOtherTri.v0.y;
		var he1z = hOtherTri.v1.z - hOtherTri.v0.z;
		var he2x = hOtherTri.v2.x - hOtherTri.v0.x;
		var he2y = hOtherTri.v2.y - hOtherTri.v0.y;
		var he2z = hOtherTri.v2.z - hOtherTri.v0.z;
		var hnx = he1y * he2z - he1z * he2y;
		var hny = he1z * he2x - he1x * he2z;
		var hnz = he1x * he2y - he1y * he2x;
		var hrpx = hOtherTri.v0.x, hrpy = hOtherTri.v0.y, hrpz = hOtherTri.v0.z;
		var hDotPt = (point.x - hrpx) * hnx + (point.y - hrpy) * hny + (point.z - hrpz) * hnz;
		if (Math.abs(hDotPt) > tol) {
			return (hDotPt * normalSign < 0) ? 1 : -1;
		}
		return 0;
	}

	// Step C2) Helper: classify a point against a SPECIFIC segment's other-mesh plane.
	// Used by Step D0 (border-segment) and Step E3 (constraint enforcement).
	function segHalfSpace(point, seg) {
		var sOtherTri = otherTris[seg[otherIdxKey]];
		if (!sOtherTri) return 0;
		var se1x = sOtherTri.v1.x - sOtherTri.v0.x;
		var se1y = sOtherTri.v1.y - sOtherTri.v0.y;
		var se1z = sOtherTri.v1.z - sOtherTri.v0.z;
		var se2x = sOtherTri.v2.x - sOtherTri.v0.x;
		var se2y = sOtherTri.v2.y - sOtherTri.v0.y;
		var se2z = sOtherTri.v2.z - sOtherTri.v0.z;
		var snx = se1y * se2z - se1z * se2y;
		var sny = se1z * se2x - se1x * se2z;
		var snz = se1x * se2y - se1y * se2x;
		var sdot = (point.x - sOtherTri.v0.x) * snx + (point.y - sOtherTri.v0.y) * sny + (point.z - sOtherTri.v0.z) * snz;
		if (Math.abs(sdot) > 1e-10) {
			return (sdot * normalSign < 0) ? 1 : -1;
		}
		return 0;
	}

	// Step D: Process each triangle.
	// Each entry tracks: tri, cls, confident (half-space = true, flood-fill = false)
	var allSubs = [];

	for (var ti = 0; ti < tris.length; ti++) {
		if (!crossedMap[ti]) {
			// Non-crossed: try half-space test first, fall back to flood-fill
			var ncTri = tris[ti];
			var ncCx = (ncTri.v0.x + ncTri.v1.x + ncTri.v2.x) / 3;
			var ncCy = (ncTri.v0.y + ncTri.v1.y + ncTri.v2.y) / 3;
			var ncCz = (ncTri.v0.z + ncTri.v1.z + ncTri.v2.z) / 3;
			var ncHalf = halfSpaceTest({ x: ncCx, y: ncCy, z: ncCz });
			if (ncHalf !== 0) {
				allSubs.push({ tri: ncTri, cls: ncHalf, confident: true });
			} else {
				allSubs.push({ tri: ncTri, cls: classifications[ti], confident: false });
			}
			continue;
		}

		// Crossed triangle: re-triangulate with intersection segment endpoints
		var segments = crossedMap[ti];
		var current = fanTriangulate(tris[ti], segments);

		for (var j = 0; j < current.length; j++) {
			var sub = current[j];
			var subVerts = [sub.v0, sub.v1, sub.v2];

			// Step D0) Border-segment classification: if this sub-tri shares an
			// edge with an intersection segment, use THAT segment's plane directly.
			// This prevents the "nearest segment" from picking a wrong crossing.
			var foundClass = 0;
			var confident = false;
			var subK0 = vk(sub.v0), subK1 = vk(sub.v1), subK2 = vk(sub.v2);
			var subEKeys = [
				subK0 < subK1 ? subK0 + "|" + subK1 : subK1 + "|" + subK0,
				subK1 < subK2 ? subK1 + "|" + subK2 : subK2 + "|" + subK1,
				subK2 < subK0 ? subK2 + "|" + subK0 : subK0 + "|" + subK2
			];
			var borderSeg = null;
			for (var bse = 0; bse < 3; bse++) {
				if (segEdgeToSeg[subEKeys[bse]]) { borderSeg = segEdgeToSeg[subEKeys[bse]]; break; }
			}
			if (borderSeg) {
				var bCx = (sub.v0.x + sub.v1.x + sub.v2.x) / 3;
				var bCy = (sub.v0.y + sub.v1.y + sub.v2.y) / 3;
				var bCz = (sub.v0.z + sub.v1.z + sub.v2.z) / 3;
				foundClass = segHalfSpace({ x: bCx, y: bCy, z: bCz }, borderSeg);
				if (foundClass !== 0) confident = true;
			}

			// Step D1) Find a "free" vertex (not a Steiner point on the intersection line)
			var freeVert = null;
			if (foundClass === 0) {
				for (var sv = 0; sv < 3; sv++) {
					var svKey = vk(subVerts[sv]);
					if (steinerKeys[svKey]) continue;
					if (!freeVert) freeVert = subVerts[sv];
				}
			}

			// Step D2) Half-space test from the free vertex (nearest segment fallback)
			if (foundClass === 0 && freeVert) {
				foundClass = halfSpaceTest(freeVert);
				if (foundClass !== 0) confident = true;
			}

			// Step D2b) All-Steiner pocket triangle: half-space from centroid.
			if (foundClass === 0 && !freeVert && !borderSeg) {
				var pcx = (sub.v0.x + sub.v1.x + sub.v2.x) / 3;
				var pcy = (sub.v0.y + sub.v1.y + sub.v2.y) / 3;
				var pcz = (sub.v0.z + sub.v1.z + sub.v2.z) / 3;
				foundClass = halfSpaceTest({ x: pcx, y: pcy, z: pcz }, 1e-15);
				if (foundClass !== 0) confident = true;
			}

			// Step D3) Fallback: vertex adjacency
			if (foundClass === 0 && freeVert) {
				var fvKey = vk(freeVert);
				var adjClass = vertexClassMap[fvKey];
				if (adjClass !== undefined) {
					foundClass = adjClass;
				}
			}

			// Step D4) Fallback: ray-cast from the free vertex
			if (foundClass === 0 && freeVert) {
				foundClass = classifyPointMultiAxis(freeVert, otherTris, otherGrids);
			}

			if (foundClass !== 0 && freeVert) {
				vertexClassMap[vk(freeVert)] = foundClass;
			}

			allSubs.push({ tri: sub, cls: foundClass, confident: confident });
		}
	}

	// Step E: Build edge adjacency across ALL entries (non-crossed + sub-triangles).
	// This lets confident half-space classifications propagate to adjacent entries.
	// IMPORTANT: exclude intersection segment edges — triangles sharing an
	// intersection edge are on opposite sides and must NOT propagate across it.
	// (segEdgeSet and segEdgeToSeg were already built in Step C.)
	var subEdgeMap = {};
	for (var si = 0; si < allSubs.length; si++) {
		var st = allSubs[si].tri;
		var sk0 = vk(st.v0), sk1 = vk(st.v1), sk2 = vk(st.v2);
		var subEdges = [
			sk0 < sk1 ? sk0 + "|" + sk1 : sk1 + "|" + sk0,
			sk1 < sk2 ? sk1 + "|" + sk2 : sk2 + "|" + sk1,
			sk2 < sk0 ? sk2 + "|" + sk0 : sk0 + "|" + sk2
		];
		for (var se = 0; se < 3; se++) {
			if (!subEdgeMap[subEdges[se]]) subEdgeMap[subEdges[se]] = [];
			subEdgeMap[subEdges[se]].push(si);
		}
	}

	var subNeighbors = new Array(allSubs.length);
	for (var sn = 0; sn < allSubs.length; sn++) subNeighbors[sn] = [];
	for (var sek in subEdgeMap) {
		// Step E0) Skip intersection segment edges — they separate inside/outside
		if (segEdgeSet[sek]) continue;
		var seList = subEdgeMap[sek];
		for (var sa = 0; sa < seList.length; sa++) {
			for (var sb = sa + 1; sb < seList.length; sb++) {
				subNeighbors[seList[sa]].push(seList[sb]);
				subNeighbors[seList[sb]].push(seList[sa]);
			}
		}
	}

	// Step E1) Propagate confident (half-space) classifications to adjacent
	// non-confident entries.
	var maxPasses = 10;
	for (var pass = 0; pass < maxPasses; pass++) {
		var changed = false;
		for (var ui = 0; ui < allSubs.length; ui++) {
			if (allSubs[ui].confident) continue;
			var nbrs2 = subNeighbors[ui];
			for (var ni3 = 0; ni3 < nbrs2.length; ni3++) {
				var neighbor = allSubs[nbrs2[ni3]];
				if (neighbor.confident && neighbor.cls !== 0) {
					if (allSubs[ui].cls !== neighbor.cls) {
						allSubs[ui].cls = neighbor.cls;
						changed = true;
					}
					allSubs[ui].confident = true;
					break;
				}
			}
		}
		if (!changed) break;
	}

	// Step E2) Fill any remaining cls===0 entries via adjacency then ray-cast
	for (var pass2 = 0; pass2 < 5; pass2++) {
		var changed2 = false;
		for (var ui2 = 0; ui2 < allSubs.length; ui2++) {
			if (allSubs[ui2].cls !== 0) continue;
			var nbrs3 = subNeighbors[ui2];
			for (var ni4 = 0; ni4 < nbrs3.length; ni4++) {
				if (allSubs[nbrs3[ni4]].cls !== 0) {
					allSubs[ui2].cls = allSubs[nbrs3[ni4]].cls;
					changed2 = true;
					break;
				}
			}
		}
		if (!changed2) break;
	}
	for (var li = 0; li < allSubs.length; li++) {
		if (allSubs[li].cls !== 0) continue;
		var lt = allSubs[li].tri;
		var lcx = (lt.v0.x + lt.v1.x + lt.v2.x) / 3;
		var lcy = (lt.v0.y + lt.v1.y + lt.v2.y) / 3;
		var lcz = (lt.v0.z + lt.v1.z + lt.v2.z) / 3;
		allSubs[li].cls = classifyPointMultiAxis(
			{ x: lcx, y: lcy, z: lcz }, otherTris, otherGrids
		);
	}

	// Step E3) Constraint enforcement: sub-triangles sharing a segment edge
	// MUST have opposite classifications (one inside, one outside).
	// If both have the same cls, reclassify them using the specific segment's plane.
	for (var cek in segEdgeToSeg) {
		var ceSubs = subEdgeMap[cek];
		if (!ceSubs || ceSubs.length < 2) continue;
		var ceHasIn = false, ceHasOut = false;
		for (var cei = 0; cei < ceSubs.length; cei++) {
			if (allSubs[ceSubs[cei]].cls === 1) ceHasIn = true;
			if (allSubs[ceSubs[cei]].cls === -1) ceHasOut = true;
		}
		if (ceHasIn && ceHasOut) continue;
		// Constraint violated -- reclassify from the segment's plane
		var ceSeg = segEdgeToSeg[cek];
		for (var cej = 0; cej < ceSubs.length; cej++) {
			var ceT = allSubs[ceSubs[cej]].tri;
			var ceCx = (ceT.v0.x + ceT.v1.x + ceT.v2.x) / 3;
			var ceCy = (ceT.v0.y + ceT.v1.y + ceT.v2.y) / 3;
			var ceCz = (ceT.v0.z + ceT.v1.z + ceT.v2.z) / 3;
			var ceCls = segHalfSpace({ x: ceCx, y: ceCy, z: ceCz }, ceSeg);
			if (ceCls !== 0) {
				allSubs[ceSubs[cej]].cls = ceCls;
				allSubs[ceSubs[cej]].confident = true;
			}
		}
	}

	// Step F: Bin into inside / outside
	for (var fi = 0; fi < allSubs.length; fi++) {
		if (allSubs[fi].cls === 1) {
			inside.push(allSubs[fi].tri);
		} else {
			outside.push(allSubs[fi].tri);
		}
	}

	return { inside: inside, outside: outside };
}

/**
 * @module repair/deduplicateVertices
 *
 * Merge seam vertices at exact (within tolerance) positions.
 * CSG / split operations create duplicate vertices along seam edges —
 * this merges them so downstream edge-counting sees shared edges correctly.
 */

/**
 * Deduplicate triangle-soup vertices that share exact (within tolerance) positions.
 *
 * @param {Array} tris - Triangle soup [{v0,v1,v2}, ...]
 * @param {number} [tolerance=1e-4] - Distance tolerance
 * @returns {Array} Triangle soup with deduplicated vertices
 */
function deduplicateSeamVertices(tris, tolerance) {
	if (!tris || tris.length === 0) return tris;
	if (tolerance === undefined) tolerance = 1e-4;

	var cellSize = tolerance * 3;
	var invCell = 1.0 / cellSize;
	var grid = {};

	function getKey(x, y, z) {
		var cx = Math.floor(x * invCell);
		var cy = Math.floor(y * invCell);
		var cz = Math.floor(z * invCell);
		return cx + "," + cy + "," + cz;
	}

	function findOrRegister(vx, vy, vz) {
		var cx = Math.floor(vx * invCell);
		var cy = Math.floor(vy * invCell);
		var cz = Math.floor(vz * invCell);
		var tolSq = tolerance * tolerance;
		var bestDist = tolSq;
		var bestVert = null;

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var key = (cx + dx) + "," + (cy + dy) + "," + (cz + dz);
					var bucket = grid[key];
					if (!bucket) continue;
					for (var b = 0; b < bucket.length; b++) {
						var cv = bucket[b];
						var ddx = cv.x - vx, ddy = cv.y - vy, ddz = cv.z - vz;
						var dSq = ddx * ddx + ddy * ddy + ddz * ddz;
						if (dSq < bestDist) {
							bestDist = dSq;
							bestVert = cv;
						}
					}
				}
			}
		}

		if (bestVert) {
			return bestVert;
		}

		var newVert = { x: vx, y: vy, z: vz };
		var regKey = getKey(vx, vy, vz);
		if (!grid[regKey]) grid[regKey] = [];
		grid[regKey].push(newVert);
		return newVert;
	}

	var result = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var cv0 = findOrRegister(tri.v0.x, tri.v0.y, tri.v0.z);
		var cv1 = findOrRegister(tri.v1.x, tri.v1.y, tri.v1.z);
		var cv2 = findOrRegister(tri.v2.x, tri.v2.y, tri.v2.z);

		if (cv0 === cv1 || cv1 === cv2 || cv2 === cv0) {
			continue;
		}

		result.push({ v0: cv0, v1: cv1, v2: cv2 });
	}

	return result;
}

/**
 * @module repair/weldVertices
 *
 * Weld triangle soup into indexed mesh, merging vertices within tolerance.
 * Uses spatial grid for O(n) welding instead of O(n^2).
 */

/**
 * Weld triangle soup into indexed mesh, merging vertices within tolerance.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} tolerance - Distance tolerance for merging vertices
 * @returns {{ points: Array<{x,y,z}>, triangles: Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }> }}
 */
function weldVertices(tris, tolerance) {
	var points = [];
	var triangles = [];

	if (tolerance <= 0) {
		for (var i = 0; i < tris.length; i++) {
			var tri = tris[i];
			points.push(
				{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
				{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
				{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
			);
			triangles.push({
				vertices: [
					{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
					{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
					{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
				]
			});
		}
		return { points: points, triangles: triangles };
	}

	var cellSize = Math.max(tolerance * 2, 0.002);
	var grid = {};
	var tolSq = tolerance * tolerance;

	function getOrAddPoint(v) {
		var gx = Math.floor(v.x / cellSize);
		var gy = Math.floor(v.y / cellSize);
		var gz = Math.floor(v.z / cellSize);

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var key = (gx + dx) + "," + (gy + dy) + "," + (gz + dz);
					var cell = grid[key];
					if (!cell) continue;
					for (var c = 0; c < cell.length; c++) {
						var p = points[cell[c]];
						var ddx = p.x - v.x, ddy = p.y - v.y, ddz = p.z - v.z;
						if (ddx * ddx + ddy * ddy + ddz * ddz <= tolSq) {
							return cell[c];
						}
					}
				}
			}
		}

		var idx = points.length;
		points.push({ x: v.x, y: v.y, z: v.z });
		var homeKey = gx + "," + gy + "," + gz;
		if (!grid[homeKey]) grid[homeKey] = [];
		grid[homeKey].push(idx);
		return idx;
	}

	for (var i2 = 0; i2 < tris.length; i2++) {
		var tri2 = tris[i2];
		var i0 = getOrAddPoint(tri2.v0);
		var i1 = getOrAddPoint(tri2.v1);
		var i22 = getOrAddPoint(tri2.v2);

		if (i0 === i1 || i1 === i22 || i0 === i22) continue;

		triangles.push({
			vertices: [
				{ x: points[i0].x, y: points[i0].y, z: points[i0].z },
				{ x: points[i1].x, y: points[i1].y, z: points[i1].z },
				{ x: points[i22].x, y: points[i22].y, z: points[i22].z }
			]
		});
	}

	return { points: points, triangles: triangles };
}

/**
 * Convert welded {vertices} format back to {v0, v1, v2} soup.
 *
 * @param {Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }>} weldedTriangles
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup
 */
function weldedToSoup(weldedTriangles) {
	var soup = [];
	for (var i = 0; i < weldedTriangles.length; i++) {
		var verts = weldedTriangles[i].vertices;
		soup.push({
			v0: { x: verts[0].x, y: verts[0].y, z: verts[0].z },
			v1: { x: verts[1].x, y: verts[1].y, z: verts[1].z },
			v2: { x: verts[2].x, y: verts[2].y, z: verts[2].z }
		});
	}
	return soup;
}

/**
 * @module normals/alignNormals
 *
 * Ensure triangle normals point in the +Z direction (Z-up convention).
 * Used as a fallback when BFS winding propagation cannot be applied
 * (non-manifold meshes).
 */


/**
 * Flip any downward-facing triangles so their normals point Z-up.
 *
 * For each triangle, computes the face normal via cross product.
 * If the Z component is negative (below the -0.01 threshold), the
 * winding order is reversed (v1 and v2 swapped) to flip the normal
 * upward.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup with Z-up normals
 */
function ensureZUpNormals(tris) {
	var result = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var v0 = { x: tri.v0.x, y: tri.v0.y, z: tri.v0.z };
		var v1 = { x: tri.v1.x, y: tri.v1.y, z: tri.v1.z };
		var v2 = { x: tri.v2.x, y: tri.v2.y, z: tri.v2.z };

		var n = triNormal({ v0: v0, v1: v1, v2: v2 });

		if (n.z < -0.01) {
			// Downward-facing -- swap v1 and v2 to flip normal
			result.push({ v0: v0, v1: v2, v2: v1 });
		} else {
			result.push({ v0: v0, v1: v1, v2: v2 });
		}
	}

	return result;
}

/**
 * Flip all triangle normals unconditionally by swapping v1 and v2.
 * Returns a NEW cloned array — never modifies the original.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Cloned array with all normals inverted
 */
function flipAllNormals(tris) {
	var result = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		result.push({
			v0: { x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
			v1: { x: tri.v2.x, y: tri.v2.y, z: tri.v2.z },
			v2: { x: tri.v1.x, y: tri.v1.y, z: tri.v1.z }
		});
	}

	return result;
}

/**
 * @module repair/resolveTJunctions
 *
 * Detect and resolve T-junctions in triangle soup.
 * A T-junction occurs when a vertex from one triangle lies on an edge of
 * another triangle but that edge hasn't been split.
 */


/**
 * Split a triangle that has Steiner points inside it, using
 * local-frame + Delaunator + barycentric-filter.
 *
 * @param {Object} tri - {v0, v1, v2}
 * @param {Array} steinerPoints - Array of {x, y, z} points on edges of this triangle
 * @returns {Array} Sub-triangles [{v0, v1, v2}, ...]
 */
function splitTriangleWithSteinerPoints(tri, steinerPoints) {
	if (!steinerPoints || steinerPoints.length === 0) return [tri];

	var e1x = tri.v1.x - tri.v0.x;
	var e1y = tri.v1.y - tri.v0.y;
	var e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x;
	var e2y = tri.v2.y - tri.v0.y;
	var e2z = tri.v2.z - tri.v0.z;

	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return [tri];
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;

	var lnx = e1y * e2z - e1z * e2y;
	var lny = e1z * e2x - e1x * e2z;
	var lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return [tri];

	var lvx = lny * luz - lnz * luy;
	var lvy = lnz * lux - lnx * luz;
	var lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return [tri];
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	var lox = tri.v0.x, loy = tri.v0.y, loz = tri.v0.z;

	function toLocal(p) {
		var dx = p.x - lox, dy = p.y - loy, dz = p.z - loz;
		return [dx * lux + dy * luy + dz * luz, dx * lvx + dy * lvy + dz * lvz];
	}

	var l0 = toLocal(tri.v0);
	var l1 = toLocal(tri.v1);
	var l2 = toLocal(tri.v2);

	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return [tri];

	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	var triArea2D = Math.abs(baryD) * 0.5;
	var MIN_AREA_RATIO = 1e-8;

	var pts = [
		{ x: tri.v0.x, y: tri.v0.y, z: tri.v0.z },
		{ x: tri.v1.x, y: tri.v1.y, z: tri.v1.z },
		{ x: tri.v2.x, y: tri.v2.y, z: tri.v2.z }
	];
	for (var si = 0; si < steinerPoints.length; si++) {
		pts.push(steinerPoints[si]);
	}

	var n = pts.length;
	var coords = new Float64Array(n * 2);
	for (var j = 0; j < n; j++) {
		var lj = toLocal(pts[j]);
		coords[j * 2] = lj[0];
		coords[j * 2 + 1] = lj[1];
	}

	var del;
	try {
		del = new Delaunator(coords);
	} catch (de) {
		return [tri];
	}

	var result = [];
	var delTris = del.triangles;
	for (var k = 0; k < delTris.length; k += 3) {
		var a = delTris[k], b = delTris[k + 1], c = delTris[k + 2];

		var cx2 = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cy2 = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;

		var cBary = baryCoords(cx2, cy2);
		if (cBary[0] < -1e-6 || cBary[1] < -1e-6 || cBary[2] < -1e-6) continue;

		var au = coords[a * 2], av = coords[a * 2 + 1];
		var bu = coords[b * 2], bv = coords[b * 2 + 1];
		var cu = coords[c * 2], cv = coords[c * 2 + 1];
		var subArea = Math.abs((bu - au) * (cv - av) - (cu - au) * (bv - av)) * 0.5;
		if (subArea < triArea2D * MIN_AREA_RATIO) continue;

		result.push({ v0: pts[a], v1: pts[b], v2: pts[c] });
	}

	if (result.length === 0) return [tri];
	return result;
}

/**
 * Detect and resolve T-junctions in triangle soup.
 *
 * @param {Array} soup - Triangle soup [{v0, v1, v2}, ...]
 * @param {number} [tolerance=1e-4] - Distance tolerance in metres
 * @param {number} [maxPasses=3] - Max iteration passes
 * @returns {Array} Triangle soup with T-junctions resolved
 */
function resolveTJunctions(soup, tolerance, maxPasses) {
	if (!soup || soup.length === 0) return soup;
	if (!tolerance) tolerance = 1e-4;
	if (!maxPasses) maxPasses = 3;

	var PREC = 6;

	function localVKey(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}

	// Compute average edge length for grid cell size
	var edgeLenSum = 0;
	var edgeCount = 0;
	for (var ei0 = 0; ei0 < Math.min(soup.length, 200); ei0++) {
		var st = soup[ei0];
		edgeLenSum += dist3(st.v0, st.v1) + dist3(st.v1, st.v2) + dist3(st.v2, st.v0);
		edgeCount += 3;
	}
	var avgEdge = edgeCount > 0 ? edgeLenSum / edgeCount : 1.0;

	for (var pass = 0; pass < maxPasses; pass++) {
		var cellSize = Math.max(avgEdge, tolerance * 100, 0.1);
		var invCell = 1.0 / cellSize;
		var grid = {};

		var vertSeen = {};
		for (var i = 0; i < soup.length; i++) {
			var tri = soup[i];
			var verts = [tri.v0, tri.v1, tri.v2];
			for (var vi = 0; vi < 3; vi++) {
				var v = verts[vi];
				var key = localVKey(v);
				if (!vertSeen[key]) {
					vertSeen[key] = true;
					var gx = Math.floor(v.x * invCell);
					var gy = Math.floor(v.y * invCell);
					var gz = Math.floor(v.z * invCell);
					var gk = gx + "," + gy + "," + gz;
					if (!grid[gk]) grid[gk] = [];
					grid[gk].push(v);
				}
			}
		}

		var triSteiner = [];
		var splitCount = 0;
		var tolSq = tolerance * tolerance;

		for (var ti = 0; ti < soup.length; ti++) {
			var t = soup[ti];
			var tv = [t.v0, t.v1, t.v2];
			var tvKeys = [localVKey(tv[0]), localVKey(tv[1]), localVKey(tv[2])];
			var steiners = null;

			for (var ei = 0; ei < 3; ei++) {
				var eA = tv[ei];
				var eB = tv[(ei + 1) % 3];

				var abx = eB.x - eA.x;
				var aby = eB.y - eA.y;
				var abz = eB.z - eA.z;
				var abLenSq = abx * abx + aby * aby + abz * abz;
				if (abLenSq < 1e-20) continue;

				var abLen = Math.sqrt(abLenSq);
				var eps = tolerance / abLen;
				if (eps >= 0.5) continue;

				var visited = {};
				var steps = Math.ceil(abLen / cellSize) + 1;
				for (var si = 0; si <= steps; si++) {
					var frac = si / steps;
					var sx = eA.x + frac * abx;
					var sy = eA.y + frac * aby;
					var sz = eA.z + frac * abz;
					var sgx = Math.floor(sx * invCell);
					var sgy = Math.floor(sy * invCell);
					var sgz = Math.floor(sz * invCell);

					for (var dx = -1; dx <= 1; dx++) {
						for (var dy = -1; dy <= 1; dy++) {
							for (var dz = -1; dz <= 1; dz++) {
								var ck = (sgx + dx) + "," + (sgy + dy) + "," + (sgz + dz);
								if (visited[ck]) continue;
								visited[ck] = true;

								var cell = grid[ck];
								if (!cell) continue;

								for (var ci = 0; ci < cell.length; ci++) {
									var V = cell[ci];
									var vk = localVKey(V);
									if (vk === tvKeys[0] || vk === tvKeys[1] || vk === tvKeys[2]) continue;

									var apx = V.x - eA.x;
									var apy = V.y - eA.y;
									var apz = V.z - eA.z;
									var tp = (apx * abx + apy * aby + apz * abz) / abLenSq;

									if (tp <= eps || tp >= 1 - eps) continue;

									var projX = eA.x + tp * abx;
									var projY = eA.y + tp * aby;
									var projZ = eA.z + tp * abz;
									var ddx = V.x - projX;
									var ddy = V.y - projY;
									var ddz = V.z - projZ;
									var distSq = ddx * ddx + ddy * ddy + ddz * ddz;

									if (distSq < tolSq) {
										if (!steiners) steiners = [];
										steiners.push({ x: V.x, y: V.y, z: V.z });
									}
								}
							}
						}
					}
				}
			}

			if (steiners) {
				var seen2 = {};
				var unique = [];
				for (var su = 0; su < steiners.length; su++) {
					var sk = localVKey(steiners[su]);
					if (!seen2[sk]) {
						seen2[sk] = true;
						unique.push(steiners[su]);
					}
				}
				triSteiner[ti] = unique;
				splitCount++;
			}
		}

		if (splitCount === 0) break;

		var newSoup = [];
		for (var ri = 0; ri < soup.length; ri++) {
			if (triSteiner[ri]) {
				var subTris = splitTriangleWithSteinerPoints(soup[ri], triSteiner[ri]);
				for (var st2 = 0; st2 < subTris.length; st2++) {
					newSoup.push(subTris[st2]);
				}
			} else {
				newSoup.push(soup[ri]);
			}
		}

		soup = newSoup;
	}

	return soup;
}

/**
 * @module repair/weldBoundary
 *
 * Weld boundary vertices (open-edge endpoints) to nearby boundary vertices
 * using union-find clustering. This closes seam gaps by snapping open-edge
 * vertices to their nearest boundary neighbors.
 */


/**
 * Weld boundary vertices using union-find.
 * Only boundary vertices (those on edges with count === 1) are considered
 * for merging. Vertices within tolerance are clustered and replaced with
 * their centroid.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} tolerance - Max 3D distance to snap boundary vertices
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup with boundary vertices merged
 */
function weldBoundaryVertices(tris, tolerance) {
	if (tolerance <= 0) return tris;

	var edgeMap = {};
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(keys[e], keys[ne]);
			if (!edgeMap[ek]) edgeMap[ek] = { count: 0, k0: keys[e], k1: keys[ne], v0: verts[e], v1: verts[ne] };
			edgeMap[ek].count++;
		}
	}

	var boundaryVerts = {};
	for (var ek2 in edgeMap) {
		if (edgeMap[ek2].count === 1) {
			boundaryVerts[edgeMap[ek2].k0] = edgeMap[ek2].v0;
			boundaryVerts[edgeMap[ek2].k1] = edgeMap[ek2].v1;
		}
	}

	var bvKeys = Object.keys(boundaryVerts);
	if (bvKeys.length === 0) return tris;

	var cellSize = Math.max(tolerance * 2, 0.01);
	var grid = {};
	var tolSq = tolerance * tolerance;

	for (var bi = 0; bi < bvKeys.length; bi++) {
		var bv = boundaryVerts[bvKeys[bi]];
		var gk = Math.floor(bv.x / cellSize) + "," + Math.floor(bv.y / cellSize) + "," + Math.floor(bv.z / cellSize);
		if (!grid[gk]) grid[gk] = [];
		grid[gk].push(bvKeys[bi]);
	}

	// Union-find
	var parent = {};
	for (var pi = 0; pi < bvKeys.length; pi++) {
		parent[bvKeys[pi]] = bvKeys[pi];
	}

	function find(k) {
		while (parent[k] !== k) {
			parent[k] = parent[parent[k]];
			k = parent[k];
		}
		return k;
	}

	function union(a, b) {
		var ra = find(a), rb = find(b);
		if (ra !== rb) parent[ra] = rb;
	}

	for (var si = 0; si < bvKeys.length; si++) {
		var sv = boundaryVerts[bvKeys[si]];
		var sgx = Math.floor(sv.x / cellSize);
		var sgy = Math.floor(sv.y / cellSize);
		var sgz = Math.floor(sv.z / cellSize);

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var cell = grid[(sgx + dx) + "," + (sgy + dy) + "," + (sgz + dz)];
					if (!cell) continue;
					for (var ci = 0; ci < cell.length; ci++) {
						if (cell[ci] === bvKeys[si]) continue;
						var cv = boundaryVerts[cell[ci]];
						var ddx = sv.x - cv.x, ddy = sv.y - cv.y, ddz = sv.z - cv.z;
						if (ddx * ddx + ddy * ddy + ddz * ddz <= tolSq) {
							union(bvKeys[si], cell[ci]);
						}
					}
				}
			}
		}
	}

	// Build clusters and compute centroids
	var clusters = {};
	for (var ki = 0; ki < bvKeys.length; ki++) {
		var root = find(bvKeys[ki]);
		var v = boundaryVerts[bvKeys[ki]];
		if (!clusters[root]) {
			clusters[root] = { sumX: 0, sumY: 0, sumZ: 0, count: 0 };
		}
		clusters[root].sumX += v.x;
		clusters[root].sumY += v.y;
		clusters[root].sumZ += v.z;
		clusters[root].count++;
	}

	var mergeMap = {};
	var mergedCount = 0;
	for (var mi = 0; mi < bvKeys.length; mi++) {
		var root2 = find(bvKeys[mi]);
		var cl = clusters[root2];
		if (cl.count > 1) {
			mergeMap[bvKeys[mi]] = {
				x: cl.sumX / cl.count,
				y: cl.sumY / cl.count,
				z: cl.sumZ / cl.count
			};
			mergedCount++;
		}
	}

	if (mergedCount === 0) {
		return tris;
	}

	function remap(v2) {
		var k = vKey(v2);
		if (mergeMap[k]) return mergeMap[k];
		return v2;
	}

	var result = [];
	for (var ri = 0; ri < tris.length; ri++) {
		var rv0 = remap(tris[ri].v0);
		var rv1 = remap(tris[ri].v1);
		var rv2 = remap(tris[ri].v2);

		var k0 = vKey(rv0), k1 = vKey(rv1), k2 = vKey(rv2);
		if (k0 === k1 || k1 === k2 || k0 === k2) {
			continue;
		}

		result.push({ v0: rv0, v1: rv1, v2: rv2 });
	}

	return result;
}

/**
 * @module repair/fillOpenLoops
 *
 * Fill closed boundary loops with fan triangles.
 *
 * Finds open edges (used by exactly 1 triangle), chains them into
 * polylines, and for each closed loop fills the hole with a fan from
 * vertex 0.  Winding is matched to the adjacent existing triangle so
 * that normals stay consistent.
 *
 * Exports:
 *  - fillOpenEdgeLoops(soup, tolerance)
 */

/**
 * Fill closed open-edge loops in a triangle soup with fan triangles.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup
 * @param {number} [tolerance=1e-6] - Vertex snapping tolerance for chaining
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Soup with fill triangles appended
 */
function fillOpenEdgeLoops(soup, tolerance) {
	if (!soup || soup.length === 0) return soup;

	var PREC = 6;
	function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
	function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	// Step 1) Find open edges and record half-edge directions for winding
	var edgeCount = {};
	var edgeVerts = {};
	// halfEdgeDir[ek] = { from: vk, to: vk } — direction in the existing mesh
	var halfEdgeDir = {};
	for (var i = 0; i < soup.length; i++) {
		var tri = soup[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vk(vs[0]), vk(vs[1]), vk(vs[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var key = ek(ks[e], ks[ne]);
			if (!edgeCount[key]) {
				edgeCount[key] = 0;
				edgeVerts[key] = [vs[e], vs[ne]];
			}
			edgeCount[key]++;
			// Record the half-edge direction from this triangle
			halfEdgeDir[key] = { from: ks[e], to: ks[ne] };
		}
	}

	// Step 2) Collect open edges as directed segments
	var openEdges = [];
	for (var k in edgeCount) {
		if (edgeCount[k] === 1) {
			openEdges.push({ p0: edgeVerts[k][0], p1: edgeVerts[k][1], key: k });
		}
	}
	if (openEdges.length === 0) return soup;

	// Step 3) Chain open edges into polylines via vertex-key adjacency
	var vertToEdges = {};
	for (var oi = 0; oi < openEdges.length; oi++) {
		var k0 = vk(openEdges[oi].p0);
		var k1 = vk(openEdges[oi].p1);
		if (!vertToEdges[k0]) vertToEdges[k0] = [];
		vertToEdges[k0].push(oi);
		if (!vertToEdges[k1]) vertToEdges[k1] = [];
		vertToEdges[k1].push(oi);
	}

	var used = {};
	var loops = [];

	for (var seed = 0; seed < openEdges.length; seed++) {
		if (used[seed]) continue;
		used[seed] = true;

		// Build chain starting from this seed edge
		var chain = [openEdges[seed].p0, openEdges[seed].p1];
		var chainKeys = [vk(openEdges[seed].p0), vk(openEdges[seed].p1)];
		// Track which edge keys are in this chain (for winding later)
		var chainEdgeKeys = [openEdges[seed].key];

		// Step 3a) Extend from the tail
		var extending = true;
		while (extending) {
			extending = false;
			var tailKey = chainKeys[chainKeys.length - 1];
			var candidates = vertToEdges[tailKey];
			if (!candidates) break;
			for (var ci = 0; ci < candidates.length; ci++) {
				var cIdx = candidates[ci];
				if (used[cIdx]) continue;
				var ce = openEdges[cIdx];
				var ck0 = vk(ce.p0);
				var ck1 = vk(ce.p1);
				if (ck0 === tailKey) {
					used[cIdx] = true;
					chain.push(ce.p1);
					chainKeys.push(ck1);
					chainEdgeKeys.push(ce.key);
					extending = true;
					break;
				} else if (ck1 === tailKey) {
					used[cIdx] = true;
					chain.push(ce.p0);
					chainKeys.push(ck0);
					chainEdgeKeys.push(ce.key);
					extending = true;
					break;
				}
			}
		}

		// Step 3b) Extend from the head
		extending = true;
		while (extending) {
			extending = false;
			var headKey = chainKeys[0];
			var candidates2 = vertToEdges[headKey];
			if (!candidates2) break;
			for (var ci2 = 0; ci2 < candidates2.length; ci2++) {
				var cIdx2 = candidates2[ci2];
				if (used[cIdx2]) continue;
				var ce2 = openEdges[cIdx2];
				var ck02 = vk(ce2.p0);
				var ck12 = vk(ce2.p1);
				if (ck02 === headKey) {
					used[cIdx2] = true;
					chain.unshift(ce2.p1);
					chainKeys.unshift(ck12);
					chainEdgeKeys.unshift(ce2.key);
					extending = true;
					break;
				} else if (ck12 === headKey) {
					used[cIdx2] = true;
					chain.unshift(ce2.p0);
					chainKeys.unshift(ck02);
					chainEdgeKeys.unshift(ce2.key);
					extending = true;
					break;
				}
			}
		}

		// Step 3c) Check if chain forms a closed loop
		if (chainKeys[0] === chainKeys[chainKeys.length - 1] && chain.length >= 4) {
			// Remove duplicate closing vertex
			chain.pop();
			chainKeys.pop();
			loops.push({ verts: chain, keys: chainKeys, edgeKeys: chainEdgeKeys });
		}
	}

	if (loops.length === 0) return soup;

	// Step 4) Fan-fill each closed loop
	var result = soup.slice();
	for (var li = 0; li < loops.length; li++) {
		var loop = loops[li];
		var lv = loop.verts;
		if (lv.length < 3) continue;

		// Step 4a) Determine winding from an adjacent existing triangle.
		// Look at the first edge of the loop and check the half-edge direction
		// in the existing mesh. The fill triangle should traverse that edge in
		// the OPPOSITE direction for consistent normals.
		var firstEdgeKey = loop.edgeKeys[0];
		var heDir = halfEdgeDir[firstEdgeKey];
		var v0Key = loop.keys[0];
		var v1Key = loop.keys[1];

		// The existing mesh traverses firstEdge as heDir.from -> heDir.to.
		// For consistent winding, the fill should traverse it as heDir.to -> heDir.from.
		// In the fan from vertex 0: Triangle(V0, V1, V2).
		// The edge V0->V1 corresponds to the first loop edge.
		// If V0->V1 matches heDir.from->heDir.to, we need to REVERSE the loop.
		var needReverse = (v0Key === heDir.from && v1Key === heDir.to);
		if (needReverse) {
			lv = lv.slice().reverse();
		}

		// Step 4b) Fan from vertex 0 to all consecutive pairs
		var fanOrigin = lv[0];
		for (var fi = 1; fi < lv.length - 1; fi++) {
			result.push({
				v0: { x: fanOrigin.x, y: fanOrigin.y, z: fanOrigin.z },
				v1: { x: lv[fi].x, y: lv[fi].y, z: lv[fi].z },
				v2: { x: lv[fi + 1].x, y: lv[fi + 1].y, z: lv[fi + 1].z }
			});
		}
	}

	return result;
}

/**
 * @module util/connectedComponents
 *
 * Find connected components in a triangle soup via shared-edge adjacency.
 */

/**
 * Split a triangle soup into its connected components.
 *
 * Two triangles are connected if they share an edge (two vertices with
 * matching coordinates). Returns an array of soups, one per component,
 * ordered largest-first.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup
 * @returns {Array<Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>>}
 */
function findConnectedComponents(soup) {
	if (!soup || soup.length === 0) return [];
	if (soup.length === 1) return [soup.slice()];

	var PREC = 6;
	function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
	function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	// Step 1) Build edge -> triangle index map
	var edgeToTris = {};
	for (var i = 0; i < soup.length; i++) {
		var tri = soup[i];
		var ks = [vk(tri.v0), vk(tri.v1), vk(tri.v2)];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var key = ek(ks[e], ks[ne]);
			if (!edgeToTris[key]) edgeToTris[key] = [];
			edgeToTris[key].push(i);
		}
	}

	// Step 2) Build per-triangle neighbor list
	var neighbors = new Array(soup.length);
	for (var ni = 0; ni < soup.length; ni++) neighbors[ni] = [];

	for (var ek2 in edgeToTris) {
		var tris = edgeToTris[ek2];
		for (var a = 0; a < tris.length; a++) {
			for (var b = a + 1; b < tris.length; b++) {
				neighbors[tris[a]].push(tris[b]);
				neighbors[tris[b]].push(tris[a]);
			}
		}
	}

	// Step 3) BFS to find connected components
	var visited = new Uint8Array(soup.length);
	var components = [];

	for (var seed = 0; seed < soup.length; seed++) {
		if (visited[seed]) continue;
		var component = [];
		var queue = [seed];
		visited[seed] = 1;
		var head = 0;

		while (head < queue.length) {
			var cur = queue[head++];
			component.push(soup[cur]);
			var nbrs = neighbors[cur];
			for (var n = 0; n < nbrs.length; n++) {
				if (!visited[nbrs[n]]) {
					visited[nbrs[n]] = 1;
					queue.push(nbrs[n]);
				}
			}
		}
		components.push(component);
	}

	// Step 4) Sort largest-first
	components.sort(function(a, b) { return b.length - a.length; });
	return components;
}

/**
 * @module repair/forceClose
 *
 * Force-close an indexed mesh using integer point indices.
 * Operates on the indexed mesh (after weld) to find boundary edges
 * and close them with zero floating-point precision issues.
 */

/**
 * Force-close an indexed mesh by filling boundary edges with fan triangles.
 * Uses integer point indices to avoid floating-point precision issues.
 *
 * @param {Array<{x: number, y: number, z: number}>} points - Vertex array
 * @param {Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }>} triangles - Indexed triangles
 * @returns {{ points: Array<{x,y,z}>, triangles: Array<{ vertices: [{x,y,z},{x,y,z},{x,y,z}] }> }}
 */
function forceCloseIndexedMesh(points, triangles) {
	var ptIndex = {};
	for (var pi = 0; pi < points.length; pi++) {
		var pk = points[pi].x + "," + points[pi].y + "," + points[pi].z;
		ptIndex[pk] = pi;
	}

	var idxTris = [];
	for (var ti = 0; ti < triangles.length; ti++) {
		var v = triangles[ti].vertices;
		var i0 = ptIndex[v[0].x + "," + v[0].y + "," + v[0].z];
		var i1 = ptIndex[v[1].x + "," + v[1].y + "," + v[1].z];
		var i2 = ptIndex[v[2].x + "," + v[2].y + "," + v[2].z];
		if (i0 !== undefined && i1 !== undefined && i2 !== undefined) {
			idxTris.push([i0, i1, i2]);
		}
	}

	var cellSize = 2.0;
	var grid = {};
	for (var gi = 0; gi < points.length; gi++) {
		var gp = points[gi];
		var gk = Math.floor(gp.x / cellSize) + "," + Math.floor(gp.y / cellSize) + "," + Math.floor(gp.z / cellSize);
		if (!grid[gk]) grid[gk] = [];
		grid[gk].push(gi);
	}

	var totalAdded = 0;
	var maxPasses = 30;

	for (var pass = 0; pass < maxPasses; pass++) {
		var edgeMap = {};
		for (var ei = 0; ei < idxTris.length; ei++) {
			var t = idxTris[ei];
			for (var e = 0; e < 3; e++) {
				var a = t[e], b = t[(e + 1) % 3];
				var ek = a < b ? a + "|" + b : b + "|" + a;
				edgeMap[ek] = (edgeMap[ek] || 0) + 1;
			}
		}

		var boundaryEdges = [];
		for (var bek in edgeMap) {
			if (edgeMap[bek] === 1) {
				var parts = bek.split("|");
				boundaryEdges.push([parseInt(parts[0]), parseInt(parts[1])]);
			}
		}

		if (boundaryEdges.length === 0) {
			break;
		}

		var newTris = [];
		var usedEdges = {};

		for (var bi = 0; bi < boundaryEdges.length; bi++) {
			var be = boundaryEdges[bi];
			var beKey = be[0] < be[1] ? be[0] + "|" + be[1] : be[1] + "|" + be[0];
			if (usedEdges[beKey]) continue;

			var p0 = points[be[0]];
			var p1 = points[be[1]];
			var mid = {
				x: (p0.x + p1.x) / 2,
				y: (p0.y + p1.y) / 2,
				z: (p0.z + p1.z) / 2
			};

			var mgx = Math.floor(mid.x / cellSize);
			var mgy = Math.floor(mid.y / cellSize);
			var mgz = Math.floor(mid.z / cellSize);

			var bestIdx = -1;
			var bestDist = Infinity;

			for (var dx = -1; dx <= 1; dx++) {
				for (var dy = -1; dy <= 1; dy++) {
					for (var dz = -1; dz <= 1; dz++) {
						var cell = grid[(mgx + dx) + "," + (mgy + dy) + "," + (mgz + dz)];
						if (!cell) continue;
						for (var ci = 0; ci < cell.length; ci++) {
							var cIdx = cell[ci];
							if (cIdx === be[0] || cIdx === be[1]) continue;

							var cp = points[cIdx];
							var ddx = mid.x - cp.x, ddy = mid.y - cp.y, ddz = mid.z - cp.z;
							var d2 = ddx * ddx + ddy * ddy + ddz * ddz;
							if (d2 >= bestDist) continue;

							var ek0 = be[0] < cIdx ? be[0] + "|" + cIdx : cIdx + "|" + be[0];
							var ek1 = be[1] < cIdx ? be[1] + "|" + cIdx : cIdx + "|" + be[1];
							if ((edgeMap[ek0] || 0) >= 2) continue;
							if ((edgeMap[ek1] || 0) >= 2) continue;

							var abx = p1.x - p0.x, aby = p1.y - p0.y, abz = p1.z - p0.z;
							var acx = cp.x - p0.x, acy = cp.y - p0.y, acz = cp.z - p0.z;
							var cx2 = aby * acz - abz * acy;
							var cy2 = abz * acx - abx * acz;
							var cz2 = abx * acy - aby * acx;
							var area = cx2 * cx2 + cy2 * cy2 + cz2 * cz2;
							if (area < 1e-12) continue;

							bestIdx = cIdx;
							bestDist = d2;
						}
					}
				}
			}

			if (bestIdx >= 0) {
				idxTris.push([be[0], be[1], bestIdx]);
				newTris.push([be[0], be[1], bestIdx]);
				usedEdges[beKey] = true;

				var nek0 = be[0] < bestIdx ? be[0] + "|" + bestIdx : bestIdx + "|" + be[0];
				var nek1 = be[1] < bestIdx ? be[1] + "|" + bestIdx : bestIdx + "|" + be[1];
				edgeMap[nek0] = (edgeMap[nek0] || 0) + 1;
				edgeMap[nek1] = (edgeMap[nek1] || 0) + 1;
				edgeMap[beKey] = 2;
			}
		}

		if (newTris.length === 0) {
			break;
		}

		totalAdded += newTris.length;
	}

	var outTris = [];
	for (var oi = 0; oi < idxTris.length; oi++) {
		var t2 = idxTris[oi];
		outTris.push({
			vertices: [
				{ x: points[t2[0]].x, y: points[t2[0]].y, z: points[t2[0]].z },
				{ x: points[t2[1]].x, y: points[t2[1]].y, z: points[t2[1]].z },
				{ x: points[t2[2]].x, y: points[t2[2]].y, z: points[t2[2]].z }
			]
		});
	}

	return { points: points, triangles: outTris };
}

/**
 * @module boolean/booleanOp
 *
 * Main boolean operation entry point. Computes the union, intersection,
 * or subtraction of two triangle meshes using a classify-then-split
 * algorithm:
 *
 * 1. Find tagged intersection segments between mesh A and mesh B
 * 2. Build crossed-triangle sets from segment tags
 * 3. Build multi-axis spatial grids for both meshes (XY, YZ, XZ)
 * 4. Classify via flood fill (BFS with multi-axis majority-vote seeds)
 * 5. Split straddling triangles and classify sub-triangles
 * 6. Deduplicate seam vertices
 * 7. Propagate normals (BFS winding or Z-up fallback)
 * 8. Combine groups based on operation
 * 9. Return welded result
 */



/**
 * Propagate consistent winding order across a triangle mesh via BFS.
 *
 * If the mesh is manifold (every edge shared by exactly 2 triangles),
 * BFS from a seed triangle enforces consistent winding by checking
 * shared-edge direction. If not manifold, falls back to ensureZUpNormals.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangle soup with consistent normals
 */
function propagateNormals(tris) {
	if (tris.length === 0) return tris;

	// Build half-edge-to-triangle adjacency
	var PREC = 6;
	function vk(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}

	// For each triangle, compute its 3 directed half-edges
	var edgeToTris = {}; // "ka|kb" (sorted) -> [{triIdx, from, to}]

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var k0 = vk(tri.v0), k1 = vk(tri.v1), k2 = vk(tri.v2);
		var edges = [
			{ from: k0, to: k1 },
			{ from: k1, to: k2 },
			{ from: k2, to: k0 }
		];
		for (var e = 0; e < 3; e++) {
			var sortedKey = edges[e].from < edges[e].to
				? edges[e].from + "|" + edges[e].to
				: edges[e].to + "|" + edges[e].from;
			if (!edgeToTris[sortedKey]) edgeToTris[sortedKey] = [];
			edgeToTris[sortedKey].push({
				triIdx: i,
				from: edges[e].from,
				to: edges[e].to
			});
		}
	}

	// Check manifoldness -- every edge should have exactly 2 triangles
	var isManifold = true;
	for (var ek in edgeToTris) {
		if (edgeToTris[ek].length !== 2) {
			isManifold = false;
			break;
		}
	}

	if (!isManifold) {
		// Non-manifold: fall back to per-triangle Z-up normals
		return ensureZUpNormals(tris);
	}

	// Build per-triangle neighbor list via shared edges
	var neighbors = new Array(tris.length);
	for (var ni = 0; ni < tris.length; ni++) neighbors[ni] = [];

	for (var ek2 in edgeToTris) {
		var pair = edgeToTris[ek2];
		if (pair.length !== 2) continue;
		var t0 = pair[0], t1 = pair[1];
		neighbors[t0.triIdx].push({
			neighbor: t1.triIdx,
			// If both traverse this edge in the SAME direction, they're inconsistent
			sameDirection: (t0.from === t1.from)
		});
		neighbors[t1.triIdx].push({
			neighbor: t0.triIdx,
			sameDirection: (t0.from === t1.from)
		});
	}

	// BFS from seed (triangle 0), enforce consistent winding
	var flipped = new Uint8Array(tris.length); // 0=keep, 1=flip
	var visited = new Uint8Array(tris.length);
	visited[0] = 1; // seed keeps its winding

	var queue = [0];
	var head = 0;

	while (head < queue.length) {
		var cur = queue[head++];
		var nbrs = neighbors[cur];
		for (var n = 0; n < nbrs.length; n++) {
			var nb = nbrs[n];
			if (visited[nb.neighbor]) continue;
			visited[nb.neighbor] = 1;

			// Two adjacent triangles should traverse their shared edge in OPPOSITE directions.
			// If sameDirection is true, one needs flipping.
			var curFlipped = flipped[cur];
			if (nb.sameDirection) {
				// They traverse in the same direction -> neighbor needs opposite flip state
				flipped[nb.neighbor] = curFlipped ? 0 : 1;
			} else {
				// They traverse in opposite directions -> same flip state
				flipped[nb.neighbor] = curFlipped;
			}

			queue.push(nb.neighbor);
		}
	}

	// Apply flips
	var result = [];
	for (var ri = 0; ri < tris.length; ri++) {
		var t = tris[ri];
		if (flipped[ri]) {
			result.push({
				v0: { x: t.v0.x, y: t.v0.y, z: t.v0.z },
				v1: { x: t.v2.x, y: t.v2.y, z: t.v2.z },
				v2: { x: t.v1.x, y: t.v1.y, z: t.v1.z }
			});
		} else {
			result.push({
				v0: { x: t.v0.x, y: t.v0.y, z: t.v0.z },
				v1: { x: t.v1.x, y: t.v1.y, z: t.v1.z },
				v2: { x: t.v2.x, y: t.v2.y, z: t.v2.z }
			});
		}
	}

	return result;
}

/**
 * Flip the winding order of all triangles in a soup (reverses normals).
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>}
 */
function flipSoup$1(tris) {
	var result = [];
	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		result.push({
			v0: { x: t.v0.x, y: t.v0.y, z: t.v0.z },
			v1: { x: t.v2.x, y: t.v2.y, z: t.v2.z },
			v2: { x: t.v1.x, y: t.v1.y, z: t.v1.z }
		});
	}
	return result;
}

/**
 * Split two meshes into inside/outside groups without combining them.
 *
 * This is the "split-and-pick" workflow: compute 4 groups
 * (A-inside-B, A-outside-B, B-inside-A, B-outside-A), then the caller
 * decides which groups to keep. Mirrors Kirra's computeSplits pattern.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupA - First mesh
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupB - Second mesh
 * @returns {{ groups: { aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }, segments: Array }|null}
 */
function splitMeshPair(soupA, soupB) {
	if (!soupA || !soupB || soupA.length === 0 || soupB.length === 0) {
		return null;
	}

	// Step 0) Translate to origin for floating-point precision
	var centroid = soupCentroid(soupA, soupB);
	var cx = centroid.x, cy = centroid.y, cz = centroid.z;
	soupA = translateSoup(soupA, -cx, -cy, -cz);
	soupB = translateSoup(soupB, -cx, -cy, -cz);

	// Step 1) Get tagged intersection segments
	var taggedSegments = intersectMeshPairTagged(soupA, soupB);

	if (taggedSegments.length === 0) {
		return {
			groups: {
				aInside: [],
				aOutside: translateSoup(soupA, cx, cy, cz),
				bInside: [],
				bOutside: translateSoup(soupB, cx, cy, cz)
			},
			segments: []
		};
	}

	// Step 2) Build crossed triangle sets from tagged segments
	var crossedSetA = {};
	var crossedSetB = {};
	for (var s = 0; s < taggedSegments.length; s++) {
		var seg = taggedSegments[s];
		if (!crossedSetA[seg.idxA]) crossedSetA[seg.idxA] = [];
		crossedSetA[seg.idxA].push(seg);
		if (!crossedSetB[seg.idxB]) crossedSetB[seg.idxB] = [];
		crossedSetB[seg.idxB].push(seg);
	}

	// Step 3) Build spatial grids for ray-cast classification
	var avgEdgeA = estimateAvgEdge(soupA);
	var avgEdgeB = estimateAvgEdge(soupB);
	var cellSizeA = Math.max(avgEdgeA * 2, 0.1);
	var cellSizeB = Math.max(avgEdgeB * 2, 0.1);

	var gridsA = {
		xy: { grid: buildSpatialGrid(soupA, cellSizeA), cellSize: cellSizeA },
		yz: { grid: buildSpatialGridOnAxes(soupA, cellSizeA, function (v) { return v.y; }, function (v) { return v.z; }), cellSize: cellSizeA },
		xz: { grid: buildSpatialGridOnAxes(soupA, cellSizeA, function (v) { return v.x; }, function (v) { return v.z; }), cellSize: cellSizeA }
	};
	var gridsB = {
		xy: { grid: buildSpatialGrid(soupB, cellSizeB), cellSize: cellSizeB },
		yz: { grid: buildSpatialGridOnAxes(soupB, cellSizeB, function (v) { return v.y; }, function (v) { return v.z; }), cellSize: cellSizeB },
		xz: { grid: buildSpatialGridOnAxes(soupB, cellSizeB, function (v) { return v.x; }, function (v) { return v.z; }), cellSize: cellSizeB }
	};

	// Step 4) Flood-fill classify
	var classA = classifyByFloodFill(soupA, crossedSetA, soupB, gridsB);
	var classB = classifyByFloodFill(soupB, crossedSetB, soupA, gridsA);

	// Step 5) Split straddling triangles and classify sub-triangles.
	// The half-space test inside calibrates its normal convention by sampling
	// a few points near the intersection and ray-casting them.
	var groupsA = splitStraddlingAndClassify(soupA, classA, crossedSetA, soupB, gridsB, "idxB");
	var groupsB = splitStraddlingAndClassify(soupB, classB, crossedSetB, soupA, gridsA, "idxA");

	// Step 5b) Fix non-manifold edges within each split group
	if (groupsA.inside.length > 0) groupsA.inside = fixMergedNonManifold(groupsA.inside);
	if (groupsA.outside.length > 0) groupsA.outside = fixMergedNonManifold(groupsA.outside);
	if (groupsB.inside.length > 0) groupsB.inside = fixMergedNonManifold(groupsB.inside);
	if (groupsB.outside.length > 0) groupsB.outside = fixMergedNonManifold(groupsB.outside);

	// Step 6) Deduplicate seam vertices
	if (groupsA.inside.length > 0) groupsA.inside = deduplicateSeamVertices(groupsA.inside, 1e-4);
	if (groupsA.outside.length > 0) groupsA.outside = deduplicateSeamVertices(groupsA.outside, 1e-4);
	if (groupsB.inside.length > 0) groupsB.inside = deduplicateSeamVertices(groupsB.inside, 1e-4);
	if (groupsB.outside.length > 0) groupsB.outside = deduplicateSeamVertices(groupsB.outside, 1e-4);

	// Step 7) Propagate normals for consistent winding
	if (groupsA.inside.length > 0) groupsA.inside = propagateNormals(groupsA.inside);
	if (groupsA.outside.length > 0) groupsA.outside = propagateNormals(groupsA.outside);
	if (groupsB.inside.length > 0) groupsB.inside = propagateNormals(groupsB.inside);
	if (groupsB.outside.length > 0) groupsB.outside = propagateNormals(groupsB.outside);

	// Translate results back to original coordinates
	return {
		groups: {
			aInside: translateSoup(groupsA.inside, cx, cy, cz),
			aOutside: translateSoup(groupsA.outside, cx, cy, cz),
			bInside: translateSoup(groupsB.inside, cx, cy, cz),
			bOutside: translateSoup(groupsB.outside, cx, cy, cz)
		},
		segments: taggedSegments
	};
}

/**
 * Merge split groups into a single result soup based on the operation type,
 * then weld and return the combined mesh.
 *
 * @param {{ aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }} groups
 * @param {"subtract"|"union"|"intersect"} operation
 * @returns {{ soup: Array, points: Array, triangles: Array }|null}
 */
function mergeSplitGroups(groups, operation) {
	var combined = [];

	if (operation === "subtract") {
		for (var ai = 0; ai < groups.aOutside.length; ai++) {
			combined.push(groups.aOutside[ai]);
		}
		var flippedBInside = flipSoup$1(groups.bInside);
		for (var bi = 0; bi < flippedBInside.length; bi++) {
			combined.push(flippedBInside[bi]);
		}
	} else if (operation === "union") {
		for (var ao = 0; ao < groups.aOutside.length; ao++) {
			combined.push(groups.aOutside[ao]);
		}
		for (var bo = 0; bo < groups.bOutside.length; bo++) {
			combined.push(groups.bOutside[bo]);
		}
	} else if (operation === "intersect") {
		for (var aii = 0; aii < groups.aInside.length; aii++) {
			combined.push(groups.aInside[aii]);
		}
		for (var bii = 0; bii < groups.bInside.length; bii++) {
			combined.push(groups.bInside[bii]);
		}
	} else {
		return null;
	}

	if (combined.length === 0) {
		return null;
	}

	// Step: Fix non-manifold edges in the combined mesh by removing the
	// triangle that causes the least damage (fewest new open edges).
	combined = fixMergedNonManifold(combined);

	var finalWelded = weldVertices(combined, 1e-4);
	return {
		soup: combined,
		points: finalWelded.points,
		triangles: finalWelded.triangles
	};
}

/**
 * Merge user-selected split groups into a single result.
 *
 * Each group can be independently included or excluded, and optionally
 * flipped (normals reversed). This is the "super flexible" counterpart
 * to mergeSplitGroups which hard-codes the classic boolean recipes.
 *
 * Selection object keys:
 *   aInside   {boolean|"flip"}  Include A-inside-B triangles; "flip" reverses normals
 *   aOutside  {boolean|"flip"}  Include A-outside-B triangles
 *   bInside   {boolean|"flip"}  Include B-inside-A triangles
 *   bOutside  {boolean|"flip"}  Include B-outside-A triangles
 *
 * Example — "chop top off a cylinder" (keep only A-outside-B):
 *   selectSplits(groups, { aOutside: true })
 *
 * Example — "knife through paper, keep both sides":
 *   selectSplits(groups, { aInside: true, aOutside: true })
 *
 * Example — classic subtract (A - B):
 *   selectSplits(groups, { aOutside: true, bInside: "flip" })
 *
 * @param {{ aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }} groups
 * @param {{ aInside?: boolean|"flip", aOutside?: boolean|"flip", bInside?: boolean|"flip", bOutside?: boolean|"flip" }} selection
 * @returns {{ soup: Array, points: Array, triangles: Array }|null}
 */
function selectSplits(groups, selection) {
	if (!groups || !selection) return null;
	var sel = selection;
	var combined = [];

	// Step 1) Collect selected groups, flipping where requested
	var groupNames = ["aInside", "aOutside", "bInside", "bOutside"];
	for (var g = 0; g < groupNames.length; g++) {
		var gName = groupNames[g];
		var flag = sel[gName];
		if (!flag) continue;
		var src = groups[gName];
		if (!src || src.length === 0) continue;

		if (flag === "flip") {
			var flipped = flipSoup$1(src);
			for (var fi = 0; fi < flipped.length; fi++) combined.push(flipped[fi]);
		} else {
			for (var si = 0; si < src.length; si++) combined.push(src[si]);
		}
	}

	if (combined.length === 0) return null;

	// Step 2) Fix non-manifold edges
	combined = fixMergedNonManifold(combined);

	// Step 3) Weld and return
	var finalWelded = weldVertices(combined, 1e-4);
	return {
		soup: combined,
		points: finalWelded.points,
		triangles: finalWelded.triangles
	};
}

/**
 * Decompose the 4 binary split groups into individual connected components.
 *
 * After splitMeshPair returns {aInside, aOutside, bInside, bOutside}, this
 * function finds the connected components within each group and returns a
 * flat array of component objects. For the "convoluted block crossing a
 * terrain twice" case this produces 9 components: 4 terrain pieces + 5
 * convoluted pieces.
 *
 * Each component carries metadata:
 *   mesh       "A" | "B"             — which input mesh it came from
 *   side       "inside" | "outside"  — relative to the other mesh
 *   index      number                — component index within its group
 *   soup       TriangleSoup          — the triangles
 *   triCount   number                — soup.length
 *
 * @param {{ aInside: Array, aOutside: Array, bInside: Array, bOutside: Array }} groups
 * @returns {Array<{ mesh: string, side: string, index: number, soup: Array, triCount: number }>}
 */
function splitToComponents(groups) {
	if (!groups) return [];
	var result = [];

	var groupDefs = [
		{ key: "aInside",  mesh: "A", side: "inside"  },
		{ key: "aOutside", mesh: "A", side: "outside" },
		{ key: "bInside",  mesh: "B", side: "inside"  },
		{ key: "bOutside", mesh: "B", side: "outside" }
	];

	for (var g = 0; g < groupDefs.length; g++) {
		var def = groupDefs[g];
		var soup = groups[def.key];
		if (!soup || soup.length === 0) continue;

		var components = findConnectedComponents(soup);
		for (var c = 0; c < components.length; c++) {
			result.push({
				mesh: def.mesh,
				side: def.side,
				index: c,
				soup: components[c],
				triCount: components[c].length
			});
		}
	}

	return result;
}

/**
 * Merge tiny disconnected fragments into their nearest same-group sibling.
 *
 * After splitToComponents, classification noise can produce small stray
 * components within a binary group (e.g. A-inside).  This function absorbs
 * any component whose triangle count is below `threshold` into the nearest
 * larger component of the same (mesh, side) group, measured by centroid
 * Euclidean distance.
 *
 * @param {Array<{ mesh: string, side: string, index: number, soup: Array, triCount: number }>} comps
 * @param {number} [threshold=50] - max tri count to be considered "small"
 * @returns {Array<{ mesh: string, side: string, index: number, soup: Array, triCount: number }>}
 */
function mergeSmallComponents(comps, threshold) {
	if (!comps || comps.length === 0) return comps;
	if (threshold === undefined || threshold === null) threshold = 50;

	// Step 1) Compute centroid for each component
	for (var ci = 0; ci < comps.length; ci++) {
		var cp = comps[ci];
		var sx = 0, sy = 0, sz = 0, n = 0;
		for (var ti = 0; ti < cp.soup.length; ti++) {
			var t = cp.soup[ti];
			sx += t.v0.x + t.v1.x + t.v2.x;
			sy += t.v0.y + t.v1.y + t.v2.y;
			sz += t.v0.z + t.v1.z + t.v2.z;
			n += 3;
		}
		cp._cx = n > 0 ? sx / n : 0;
		cp._cy = n > 0 ? sy / n : 0;
		cp._cz = n > 0 ? sz / n : 0;
	}

	// Step 2) Group by binary key (mesh + side)
	var groups = {};
	for (var gi = 0; gi < comps.length; gi++) {
		var gk = comps[gi].mesh + "|" + comps[gi].side;
		if (!groups[gk]) groups[gk] = [];
		groups[gk].push(gi);
	}

	// Step 3) For each group, absorb small components into nearest large sibling
	var absorbed = {};
	for (var gkey in groups) {
		var members = groups[gkey];
		var largeIdxs = [];
		var smallIdxs = [];
		for (var mi = 0; mi < members.length; mi++) {
			if (comps[members[mi]].triCount > threshold) {
				largeIdxs.push(members[mi]);
			} else {
				smallIdxs.push(members[mi]);
			}
		}
		if (largeIdxs.length === 0 || smallIdxs.length === 0) continue;

		for (var si = 0; si < smallIdxs.length; si++) {
			var sc = comps[smallIdxs[si]];
			var bestDist = Infinity;
			var bestIdx = largeIdxs[0];
			for (var li = 0; li < largeIdxs.length; li++) {
				var lc = comps[largeIdxs[li]];
				var dx = sc._cx - lc._cx;
				var dy = sc._cy - lc._cy;
				var dz = sc._cz - lc._cz;
				var d2 = dx * dx + dy * dy + dz * dz;
				if (d2 < bestDist) { bestDist = d2; bestIdx = largeIdxs[li]; }
			}
			// Absorb: append small soup into the large component
			var target = comps[bestIdx];
			for (var ai = 0; ai < sc.soup.length; ai++) {
				target.soup.push(sc.soup[ai]);
			}
			target.triCount += sc.triCount;
			absorbed[smallIdxs[si]] = true;
		}
	}

	// Step 4) Filter out absorbed components and re-index
	var out = [];
	var prevKey = "";
	var prevIdx = 0;
	for (var oi = 0; oi < comps.length; oi++) {
		if (absorbed[oi]) continue;
		var oc = comps[oi];
		var ok = oc.mesh + "|" + oc.side;
		if (ok !== prevKey) { prevIdx = 0; prevKey = ok; }
		oc.index = prevIdx++;
		delete oc._cx;
		delete oc._cy;
		delete oc._cz;
		out.push(oc);
	}
	return out;
}

/**
 * Merge an arbitrary list of component soups into a single welded result.
 *
 * Works with the output of splitToComponents — pass in the components the
 * user has selected (with optional flip flags).
 *
 * @param {Array<{ soup: Array, flip?: boolean }>} picks
 * @returns {{ soup: Array, points: Array, triangles: Array }|null}
 */
function mergeComponents(picks) {
	if (!picks || picks.length === 0) return null;
	var combined = [];

	for (var i = 0; i < picks.length; i++) {
		var src = picks[i].soup;
		if (!src || src.length === 0) continue;

		if (picks[i].flip) {
			var flipped = flipSoup$1(src);
			for (var fi = 0; fi < flipped.length; fi++) combined.push(flipped[fi]);
		} else {
			for (var si = 0; si < src.length; si++) combined.push(src[si]);
		}
	}

	if (combined.length === 0) return null;
	combined = fixMergedNonManifold(combined);
	var finalWelded = weldVertices(combined, 1e-4);
	return {
		soup: combined,
		points: finalWelded.points,
		triangles: finalWelded.triangles
	};
}

/**
 * Detect non-manifold edges in a merged triangle soup and remove offending
 * triangles. For each non-manifold edge (shared by 3+ tris), pick the
 * triangle whose removal results in the best net open-edge change.
 *
 * @param {Array} soup - combined triangle soup (modified in-place)
 * @returns {Array} cleaned soup
 */
function fixMergedNonManifold(soup) {
	var PREC = 6;
	function vk2(v) {
		return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC);
	}
	function ek2(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	var maxPasses = 5;
	for (var pass = 0; pass < maxPasses; pass++) {
		// Step 1) Build edge count map
		var edgeCnt = {};
		var triEdges = [];  // triEdges[i] = [ek0, ek1, ek2]
		for (var i = 0; i < soup.length; i++) {
			var t = soup[i];
			var k0 = vk2(t.v0), k1 = vk2(t.v1), k2 = vk2(t.v2);
			var e0 = ek2(k0, k1), e1 = ek2(k1, k2), e2 = ek2(k2, k0);
			triEdges.push([e0, e1, e2]);
			if (!edgeCnt[e0]) edgeCnt[e0] = [];
			edgeCnt[e0].push(i);
			if (!edgeCnt[e1]) edgeCnt[e1] = [];
			edgeCnt[e1].push(i);
			if (!edgeCnt[e2]) edgeCnt[e2] = [];
			edgeCnt[e2].push(i);
		}

		// Step 2) Find all non-manifold edges
		var nmEdges = [];
		for (var ek3 in edgeCnt) {
			if (edgeCnt[ek3].length > 2) nmEdges.push(ek3);
		}
		if (nmEdges.length === 0) break;

		// Step 3) For each non-manifold edge, evaluate removing each candidate
		var toRemove = {};
		for (var ni = 0; ni < nmEdges.length; ni++) {
			var nmTriIdxs = edgeCnt[nmEdges[ni]];
			var bestIdx = -1;
			var bestNet = Infinity;

			for (var ci = 0; ci < nmTriIdxs.length; ci++) {
				var ti = nmTriIdxs[ci];
				if (toRemove[ti]) continue;
				// Compute net open-edge change if we remove tri ti:
				// For each of its 3 edges:
				//   count==1 (open) -> 0: net -1 (lose an open edge)
				//   count==2 (manifold) -> 1: net +1 (gain an open edge)
				//   count>=3 (non-manifold) -> count-1: net 0
				var net = 0;
				var edges = triEdges[ti];
				for (var ei = 0; ei < 3; ei++) {
					var cnt = edgeCnt[edges[ei]].length;
					if (cnt === 1) net -= 1;
					else if (cnt === 2) net += 1;
					// count >= 3: no change in open edges
				}
				if (net < bestNet) {
					bestNet = net;
					bestIdx = ti;
				}
			}

			// Only remove if net change <= 0 (doesn't worsen open edges)
			if (bestIdx >= 0 && bestNet <= 0) {
				toRemove[bestIdx] = true;
			}
		}

		// Step 4) Remove marked triangles
		var removeList = [];
		for (var rk in toRemove) removeList.push(Number(rk));
		if (removeList.length === 0) break;
		removeList.sort(function(a, b) { return b - a; });
		for (var ri = 0; ri < removeList.length; ri++) {
			soup.splice(removeList[ri], 1);
		}
	}

	return soup;
}

/**
 * Perform a boolean operation on two triangle meshes.
 *
 * Internally calls splitMeshPair() to compute the 4 split groups,
 * then mergeSplitGroups() to combine based on the operation.
 *
 * Options (all optional):
 *   preRepair   {boolean}  Resolve T-junctions and weld boundary vertices
 *                          on both inputs before splitting. Default: false.
 *   fillGaps    {boolean}  After the boolean, fill closed open-edge loops
 *                          with fan triangles (fillOpenEdgeLoops). Default: false.
 *   forceClose  {boolean}  After the boolean, force-close using spatial-proximity
 *                          indexed fill (forceCloseIndexedMesh). Default: false.
 *   tolerance   {number}   Vertex snapping tolerance for pre-repair / fill.
 *                          Default: estimateAvgEdge * 0.01.
 *   tjunctionPasses {number} Max T-junction resolution passes. Default: 3.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupA
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupB
 * @param {"subtract"|"union"|"intersect"} operation
 * @param {Object} [options]
 * @returns {{ soup: Array, points: Array, triangles: Array }|null}
 */
function boolean(soupA, soupB, operation, options) {
	if (!soupA || !soupB || soupA.length === 0 || soupB.length === 0) {
		return null;
	}

	var opts = options || {};

	// Step 1) Optional pre-repair: resolve T-junctions + weld boundary
	if (opts.preRepair) {
		var tolA = opts.tolerance !== undefined ? opts.tolerance : estimateAvgEdge(soupA) * 0.01;
		var tolB = opts.tolerance !== undefined ? opts.tolerance : estimateAvgEdge(soupB) * 0.01;
		var passes = opts.tjunctionPasses !== undefined ? opts.tjunctionPasses : 3;
		soupA = resolveTJunctions(soupA, tolA, passes);
		soupA = weldBoundaryVertices(soupA, tolA);
		soupB = resolveTJunctions(soupB, tolB, passes);
		soupB = weldBoundaryVertices(soupB, tolB);
	}

	// Step 2) Split meshes into inside/outside groups
	var split = splitMeshPair(soupA, soupB);
	if (!split) return null;

	// Step 3) Handle no-intersection case
	if (split.segments.length === 0) {
		var resultSoup;
		if (operation === "union") {
			resultSoup = soupA.concat(soupB);
		} else if (operation === "intersect") {
			return null;
		} else {
			resultSoup = soupA.slice();
		}
		var welded = weldVertices(resultSoup, 0);
		return { soup: resultSoup, points: welded.points, triangles: welded.triangles };
	}

	// Step 4) Merge groups based on operation
	var result = mergeSplitGroups(split.groups, operation);
	if (!result) return null;

	// Step 5) Optional post-repair: fill open-edge loops with fan triangles
	if (opts.fillGaps && result.soup) {
		opts.tolerance !== undefined ? opts.tolerance : 1e-6;
		result.soup = fillOpenEdgeLoops(result.soup);
		var rw1 = weldVertices(result.soup, 1e-4);
		result.points = rw1.points;
		result.triangles = rw1.triangles;
	}

	// Step 6) Optional post-repair: force-close via indexed spatial fill
	if (opts.forceClose && result.soup) {
		var w = weldVertices(result.soup, 0.0001);
		var closed = forceCloseIndexedMesh(w.points, w.triangles);
		var newSoup = [];
		for (var ci = 0; ci < closed.triangles.length; ci++) {
			var cv = closed.triangles[ci].vertices;
			newSoup.push({
				v0: { x: cv[0].x, y: cv[0].y, z: cv[0].z },
				v1: { x: cv[1].x, y: cv[1].y, z: cv[1].z },
				v2: { x: cv[2].x, y: cv[2].y, z: cv[2].z }
			});
		}
		result.soup = newSoup;
		var rw2 = weldVertices(result.soup, 1e-4);
		result.points = rw2.points;
		result.triangles = rw2.triangles;
	}

	return result;
}

/**
 * @module repair/removeDegenerates
 *
 * Remove degenerate and sliver triangles from triangle soup.
 * Degenerate: area below minimum threshold.
 * Sliver: minimum altitude / maximum edge length below ratio threshold.
 */


/**
 * Remove degenerate and sliver triangles from a triangle soup.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} [minArea=1e-6] - Minimum triangle area in square units
 * @param {number} [sliverRatio=0.01] - Min altitude / max edge threshold
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Filtered triangle soup
 */
function removeDegenerateTriangles(tris, minArea, sliverRatio) {
	if (typeof minArea === "undefined") minArea = 1e-6;
	if (typeof sliverRatio === "undefined") sliverRatio = 0.01;

	var result = [];
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var area = triangleArea3D(tri);
		if (area < minArea) continue;
		var e0 = dist3(tri.v0, tri.v1);
		var e1 = dist3(tri.v1, tri.v2);
		var e2 = dist3(tri.v2, tri.v0);
		var maxEdge = Math.max(e0, e1, e2);
		if (maxEdge > 0) {
			var minAlt = (2 * area) / maxEdge;
			if (minAlt / maxEdge < sliverRatio) continue;
		}
		result.push(tri);
	}
	return result;
}

/**
 * @module repair/stitchEdges
 *
 * Stitch open boundary edges that are close in 3D space.
 * Finds individual boundary edge endpoints within tolerance and
 * connects them with quads (2 triangles each).
 */


/**
 * Stitch open boundary edges that are close in 3D space.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} [stitchTolerance=1.0] - Max 3D distance to connect boundary edges
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Additional stitch triangles
 */
function stitchByProximity(tris, stitchTolerance) {
	if (typeof stitchTolerance === "undefined") stitchTolerance = 1.0;

	var edgeMap = {};
	var halfEdges = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(keys[e], keys[ne]);
			if (!edgeMap[ek]) {
				edgeMap[ek] = { count: 0, v0: verts[e], v1: verts[ne], k0: keys[e], k1: keys[ne] };
			}
			edgeMap[ek].count++;
			halfEdges[keys[e] + "|" + keys[ne]] = true;
		}
	}

	var boundaryEdges = [];
	for (var ek2 in edgeMap) {
		if (edgeMap[ek2].count === 1) {
			var be = edgeMap[ek2];
			if (halfEdges[be.k0 + "|" + be.k1]) {
				boundaryEdges.push({ v0: be.v1, v1: be.v0, k0: be.k1, k1: be.k0 });
			} else {
				boundaryEdges.push({ v0: be.v0, v1: be.v1, k0: be.k0, k1: be.k1 });
			}
		}
	}

	if (boundaryEdges.length === 0) {
		return [];
	}

	var cellSize = Math.max(stitchTolerance * 3, 0.1);
	var vertGrid = {};

	function gridKey(v) {
		var gx = Math.floor(v.x / cellSize);
		var gy = Math.floor(v.y / cellSize);
		var gz = Math.floor(v.z / cellSize);
		return gx + "," + gy + "," + gz;
	}

	for (var bi = 0; bi < boundaryEdges.length; bi++) {
		var bEdge = boundaryEdges[bi];
		for (var vi = 0; vi < 2; vi++) {
			var vert = vi === 0 ? bEdge.v0 : bEdge.v1;
			var gk = gridKey(vert);
			if (!vertGrid[gk]) vertGrid[gk] = [];
			vertGrid[gk].push({ edgeIdx: bi, vertIdx: vi, vertex: vert });
		}
	}

	var usedEdges = {};
	var extraTris = [];

	for (var si = 0; si < boundaryEdges.length; si++) {
		if (usedEdges[si]) continue;
		var srcEdge = boundaryEdges[si];

		var bestMatch = -1;
		var bestTotalDist = Infinity;
		var bestFlip = false;

		var gx0 = Math.floor(srcEdge.v0.x / cellSize);
		var gy0 = Math.floor(srcEdge.v0.y / cellSize);
		var gz0 = Math.floor(srcEdge.v0.z / cellSize);

		var candidates = {};
		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var checkKey = (gx0 + dx) + "," + (gy0 + dy) + "," + (gz0 + dz);
					var cell = vertGrid[checkKey];
					if (!cell) continue;
					for (var ci = 0; ci < cell.length; ci++) {
						var cand = cell[ci];
						if (cand.edgeIdx === si || usedEdges[cand.edgeIdx]) continue;
						candidates[cand.edgeIdx] = true;
					}
				}
			}
		}

		for (var candIdx in candidates) {
			var candEdge = boundaryEdges[candIdx];

			var d00 = dist3(srcEdge.v0, candEdge.v0);
			var d11 = dist3(srcEdge.v1, candEdge.v1);
			var d01 = dist3(srcEdge.v0, candEdge.v1);
			var d10 = dist3(srcEdge.v1, candEdge.v0);

			var totalSame = d00 + d11;
			var totalFlip = d01 + d10;

			if (totalSame <= totalFlip) {
				if (d00 <= stitchTolerance && d11 <= stitchTolerance && totalSame < bestTotalDist) {
					bestMatch = parseInt(candIdx);
					bestTotalDist = totalSame;
					bestFlip = false;
				}
			} else {
				if (d01 <= stitchTolerance && d10 <= stitchTolerance && totalFlip < bestTotalDist) {
					bestMatch = parseInt(candIdx);
					bestTotalDist = totalFlip;
					bestFlip = true;
				}
			}
		}

		if (bestMatch >= 0) {
			var matchEdge = boundaryEdges[bestMatch];
			usedEdges[si] = true;
			usedEdges[bestMatch] = true;

			var mV0 = bestFlip ? matchEdge.v1 : matchEdge.v0;
			var mV1 = bestFlip ? matchEdge.v0 : matchEdge.v1;

			extraTris.push({ v0: srcEdge.v0, v1: srcEdge.v1, v2: mV0 });
			extraTris.push({ v0: srcEdge.v1, v1: mV1, v2: mV0 });
		}
	}

	return extraTris;
}

/**
 * @module repair/cleanCrossing
 *
 * Remove duplicate/conflicting triangles that cause over-shared edges (count > 2).
 *
 * Two-pass approach:
 *   Pass 1: For each over-shared edge, sort triangles by area (largest first),
 *           mark the smallest for removal until only 2 remain per edge.
 *   Pass 2: Also remove exact fingerprint duplicates among remaining triangles.
 */


/**
 * Remove duplicate/conflicting triangles that cause over-shared edges.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Cleaned triangle soup
 */
function cleanCrossingTriangles(tris) {
	var areas = [];
	var edgeToTris = {};
	var triKeys = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		areas.push(triangleArea3D(tri));
		var k0 = vKey(tri.v0);
		var k1 = vKey(tri.v1);
		var k2 = vKey(tri.v2);
		triKeys.push([k0, k1, k2]);

		var edges = [edgeKey(k0, k1), edgeKey(k1, k2), edgeKey(k2, k0)];
		for (var e = 0; e < 3; e++) {
			if (!edgeToTris[edges[e]]) edgeToTris[edges[e]] = [];
			edgeToTris[edges[e]].push(i);
		}
	}

	var removeSet = {};

	for (var ek in edgeToTris) {
		var triList = edgeToTris[ek];
		if (triList.length <= 2) continue;

		var sorted = triList.slice().sort(function (a, b) { return areas[b] - areas[a]; });
		for (var r = 2; r < sorted.length; r++) {
			removeSet[sorted[r]] = true;
		}
	}

	var seenFingerprints = {};

	for (var j = 0; j < tris.length; j++) {
		if (removeSet[j]) continue;

		var keys = triKeys[j].slice().sort();
		var fingerprint = keys.join("||");
		if (seenFingerprints[fingerprint]) {
			removeSet[j] = true;
		} else {
			seenFingerprints[fingerprint] = true;
		}
	}

	var removedCount = Object.keys(removeSet).length;
	if (removedCount === 0) {
		return tris;
	}

	var result = [];
	for (var k = 0; k < tris.length; k++) {
		if (!removeSet[k]) {
			result.push(tris[k]);
		}
	}

	return result;
}

/**
 * @module repair/boundaryLoops
 *
 * Boundary loop extraction, triangulation, and capping for triangle meshes.
 * Handles open surfaces by detecting boundary edges, chaining them into loops,
 * and triangulating the loops to produce cap polygons.
 */


/**
 * Extract boundary loops from triangle soup.
 * Boundary edges appear exactly once in the edge count map.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {{ loops: Array<Array<{x,y,z}>>, boundaryEdgeCount: number, overSharedEdgeCount: number }}
 */
function extractBoundaryLoops(tris) {
	var edgeMap = {};
	var halfEdges = {};

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var verts = [tri.v0, tri.v1, tri.v2];
		var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(keys[e], keys[ne]);
			if (!edgeMap[ek]) {
				edgeMap[ek] = { count: 0, v0: verts[e], v1: verts[ne], k0: keys[e], k1: keys[ne] };
			}
			edgeMap[ek].count++;
			halfEdges[keys[e] + "|" + keys[ne]] = true;
		}
	}

	var boundaryEdges = [];
	var overSharedCount = 0;
	for (var ek2 in edgeMap) {
		if (edgeMap[ek2].count === 1) {
			boundaryEdges.push(edgeMap[ek2]);
		} else if (edgeMap[ek2].count > 2) {
			overSharedCount++;
		}
	}

	if (boundaryEdges.length === 0) {
		return { loops: [], boundaryEdgeCount: 0, overSharedEdgeCount: overSharedCount };
	}

	var adj = {};

	for (var b = 0; b < boundaryEdges.length; b++) {
		var be = boundaryEdges[b];
		var fromKey, toKey, fromVert, toVert;
		if (halfEdges[be.k0 + "|" + be.k1]) {
			fromKey = be.k1; toKey = be.k0;
			fromVert = be.v1; toVert = be.v0;
		} else {
			fromKey = be.k0; toKey = be.k1;
			fromVert = be.v0; toVert = be.v1;
		}
		if (!adj[fromKey]) adj[fromKey] = [];
		adj[fromKey].push({ key: toKey, vertex: toVert, fromVertex: fromVert });
	}

	var used = {};
	var loops = [];

	for (var startKey in adj) {
		if (used[startKey]) continue;

		var loop = [];
		var currentKey = startKey;
		var safety = boundaryEdges.length + 1;

		while (safety-- > 0) {
			if (used[currentKey]) break;
			used[currentKey] = true;

			var neighbors = adj[currentKey];
			if (!neighbors || neighbors.length === 0) break;

			var next = null;
			for (var n = 0; n < neighbors.length; n++) {
				if (!used[neighbors[n].key] || (neighbors[n].key === startKey && loop.length > 2)) {
					next = neighbors[n];
					break;
				}
			}

			if (!next) break;

			loop.push(next.fromVertex);
			currentKey = next.key;

			if (currentKey === startKey) break;
		}

		if (loop.length >= 3) {
			loops.push(loop);
		}
	}

	return { loops: loops, boundaryEdgeCount: boundaryEdges.length, overSharedEdgeCount: overSharedCount };
}

/**
 * Ray-casting point-in-polygon test on a 2D loop stored as flat coords.
 * @private
 * @param {number} px
 * @param {number} py
 * @param {Float64Array} coords - Flat [u0,v0, u1,v1, ...] array
 * @param {number} n - Number of vertices
 * @returns {boolean}
 */
function _pointInLoop2D(px, py, coords, n) {
	var inside = false;
	for (var i = 0, j = n - 1; i < n; j = i++) {
		var xi = coords[i * 2], yi = coords[i * 2 + 1];
		var xj = coords[j * 2], yj = coords[j * 2 + 1];
		if (((yi > py) !== (yj > py)) && (px < (xj - xi) * (py - yi) / (yj - yi) + xi)) {
			inside = !inside;
		}
	}
	return inside;
}

/**
 * Triangulate a 3D polygon loop using constrained Delaunay projected onto the
 * best-fit 2D plane (the plane with the largest projected area).
 *
 * @param {Array<{x: number, y: number, z: number}>} loop - Vertices in order
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Triangles
 */
function triangulateLoop(loop) {
	if (loop.length < 3) return [];
	if (loop.length === 3) {
		return [{ v0: loop[0], v1: loop[1], v2: loop[2] }];
	}
	if (loop.length === 4) {
		var d02 = dist3(loop[0], loop[2]);
		var d13 = dist3(loop[1], loop[3]);
		if (d02 <= d13) {
			return [
				{ v0: loop[0], v1: loop[1], v2: loop[2] },
				{ v0: loop[0], v1: loop[2], v2: loop[3] }
			];
		} else {
			return [
				{ v0: loop[0], v1: loop[1], v2: loop[3] },
				{ v0: loop[1], v1: loop[2], v2: loop[3] }
			];
		}
	}

	// Compute loop normal via Newell's method
	var nx = 0, ny = 0, nz = 0;
	for (var i = 0; i < loop.length; i++) {
		var curr = loop[i];
		var next = loop[(i + 1) % loop.length];
		nx += (curr.y - next.y) * (curr.z + next.z);
		ny += (curr.z - next.z) * (curr.x + next.x);
		nz += (curr.x - next.x) * (curr.y + next.y);
	}

	// Pick the 2D projection plane using shoelace area on all 3 planes
	var areaXY = 0, areaXZ = 0, areaYZ = 0;
	for (var sa = 0; sa < loop.length; sa++) {
		var saCurr = loop[sa];
		var saNext = loop[(sa + 1) % loop.length];
		areaXY += (saCurr.x * saNext.y - saNext.x * saCurr.y);
		areaXZ += (saCurr.x * saNext.z - saNext.x * saCurr.z);
		areaYZ += (saCurr.y * saNext.z - saNext.y * saCurr.z);
	}
	areaXY = Math.abs(areaXY);
	areaXZ = Math.abs(areaXZ);
	areaYZ = Math.abs(areaYZ);

	var projU, projV;
	if (areaXY >= areaXZ && areaXY >= areaYZ) {
		projU = function (p) { return p.x; };
		projV = function (p) { return p.y; };
	} else if (areaXZ >= areaYZ) {
		projU = function (p) { return p.x; };
		projV = function (p) { return p.z; };
	} else {
		projU = function (p) { return p.y; };
		projV = function (p) { return p.z; };
	}

	var n2 = loop.length;
	var coords = new Float64Array(n2 * 2);
	for (var j = 0; j < n2; j++) {
		coords[j * 2] = projU(loop[j]);
		coords[j * 2 + 1] = projV(loop[j]);
	}

	var del, con;
	try {
		del = new Delaunator(coords);
		con = new Constrainautor(del);

		for (var ci = 0; ci < n2; ci++) {
			var ni = (ci + 1) % n2;
			try {
				con.constrainOne(ci, ni);
			} catch (e) {
				// Skip problematic constraint edges
			}
		}
	} catch (e) {
		try {
			del = new Delaunator(coords);
		} catch (e2) {
			return [];
		}
	}

	var result = [];
	var tris = del.triangles;
	for (var k = 0; k < tris.length; k += 3) {
		var a = tris[k], b = tris[k + 1], c = tris[k + 2];

		var cx2 = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cy2 = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;

		if (_pointInLoop2D(cx2, cy2, coords, n2)) {
			result.push({
				v0: loop[a],
				v1: loop[b],
				v2: loop[c]
			});
		}
	}

	// Validate cap triangle winding against the Newell loop normal
	var nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
	if (nLen > 1e-12) {
		var nnx = nx / nLen, nny = ny / nLen, nnz = nz / nLen;
		for (var wi = 0; wi < result.length; wi++) {
			var wt = result[wi];
			var ux = wt.v1.x - wt.v0.x, uy = wt.v1.y - wt.v0.y, uz = wt.v1.z - wt.v0.z;
			var vx = wt.v2.x - wt.v0.x, vy = wt.v2.y - wt.v0.y, vz = wt.v2.z - wt.v0.z;
			var tnx = uy * vz - uz * vy;
			var tny = uz * vx - ux * vz;
			var tnz = ux * vy - uy * vx;
			var dot = tnx * nnx + tny * nny + tnz * nnz;
			if (dot < 0) {
				var tmp = wt.v1;
				wt.v1 = wt.v2;
				wt.v2 = tmp;
			}
		}
	}

	return result;
}

/**
 * Find boundary edges, chain into loops, triangulate each loop to cap.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Cap triangles
 */
function capBoundaryLoops(tris) {
	var result = extractBoundaryLoops(tris);

	if (result.loops.length === 0) return [];

	var capTris = [];
	for (var li = 0; li < result.loops.length; li++) {
		var loopTris = triangulateLoop(result.loops[li]);
		for (var lt = 0; lt < loopTris.length; lt++) {
			capTris.push(loopTris[lt]);
		}
	}

	return capTris;
}

/**
 * Sequential boundary capping: cap one loop at a time, re-weld + clean
 * non-manifold after each loop.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup - Triangle soup
 * @param {number} snapTol - Weld tolerance
 * @param {number} [maxPasses=3] - Max number of cap passes
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Updated triangle soup
 */
function capBoundaryLoopsSequential(soup, snapTol, maxPasses) {
	if (!maxPasses) maxPasses = 3;
	var MAX_CAP_LOOP_VERTS = 500;

	for (var capPass = 0; capPass < maxPasses; capPass++) {
		var preStats = countOpenEdges(soup);
		if (preStats.overShared > 0) {
			soup = cleanCrossingTriangles(soup);
			var cleaned = weldVertices(soup, snapTol);
			soup = weldedToSoup(cleaned.triangles);
		}

		var loopResult = extractBoundaryLoops(soup);
		if (loopResult.loops.length === 0) {
			break;
		}

		var totalCapTris = 0;

		for (var li = 0; li < loopResult.loops.length; li++) {
			var loop = loopResult.loops[li];
			if (loop.length < 3) continue;
			if (loop.length > MAX_CAP_LOOP_VERTS) {
				continue;
			}

			var capTris = triangulateLoop(loop);
			if (capTris.length === 0) continue;

			for (var ct = 0; ct < capTris.length; ct++) {
				soup.push(capTris[ct]);
			}
			totalCapTris += capTris.length;

			var reWelded = weldVertices(soup, snapTol);
			soup = weldedToSoup(reWelded.triangles);

			var postStats = countOpenEdges(soup);
			if (postStats.overShared > 0) {
				soup = cleanCrossingTriangles(soup);
				var reCleaned = weldVertices(soup, snapTol);
				soup = weldedToSoup(reCleaned.triangles);
			}
		}

		if (totalCapTris === 0) {
			break;
		}
	}

	return soup;
}

/**
 * @module repair/removeOverlapping
 *
 * Remove overlapping anti-parallel internal wall triangles.
 *
 * Detection: Two triangles overlap when:
 *   - Their centroids are within tolerance in 3D
 *   - Their normals are nearly anti-parallel (dot product < -0.5)
 *   - They have similar areas (ratio > 0.3)
 */


/**
 * Remove overlapping triangles that form internal walls.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} [tolerance=0.5] - Max centroid distance to consider overlap
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Cleaned triangle soup
 */
function removeOverlappingTriangles(tris, tolerance) {
	if (typeof tolerance === "undefined") tolerance = 0.5;

	var centroids = [];
	var normals = [];
	var areas = [];

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		centroids.push({
			x: (tri.v0.x + tri.v1.x + tri.v2.x) / 3,
			y: (tri.v0.y + tri.v1.y + tri.v2.y) / 3,
			z: (tri.v0.z + tri.v1.z + tri.v2.z) / 3
		});
		var ux = tri.v1.x - tri.v0.x, uy = tri.v1.y - tri.v0.y, uz = tri.v1.z - tri.v0.z;
		var vx = tri.v2.x - tri.v0.x, vy = tri.v2.y - tri.v0.y, vz = tri.v2.z - tri.v0.z;
		var nx = uy * vz - uz * vy;
		var ny = uz * vx - ux * vz;
		var nz = ux * vy - uy * vx;
		var nLen = Math.sqrt(nx * nx + ny * ny + nz * nz);
		if (nLen > 0) { nx /= nLen; ny /= nLen; nz /= nLen; }
		normals.push({ x: nx, y: ny, z: nz });
		areas.push(0.5 * nLen);
	}

	var cellSize = Math.max(tolerance * 2, 0.1);
	var grid = {};

	function gKey(c) {
		return Math.floor(c.x / cellSize) + "," + Math.floor(c.y / cellSize) + "," + Math.floor(c.z / cellSize);
	}

	for (var gi = 0; gi < tris.length; gi++) {
		var gk = gKey(centroids[gi]);
		if (!grid[gk]) grid[gk] = [];
		grid[gk].push(gi);
	}

	var removeSet = {};

	for (var si = 0; si < tris.length; si++) {
		if (removeSet[si]) continue;

		var sc = centroids[si];
		var gx = Math.floor(sc.x / cellSize);
		var gy = Math.floor(sc.y / cellSize);
		var gz = Math.floor(sc.z / cellSize);

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var cell = grid[(gx + dx) + "," + (gy + dy) + "," + (gz + dz)];
					if (!cell) continue;

					for (var ci = 0; ci < cell.length; ci++) {
						var ti = cell[ci];
						if (ti <= si || removeSet[ti]) continue;

						var cdist = dist3(sc, centroids[ti]);
						if (cdist > tolerance) continue;

						var areaRatio = Math.min(areas[si], areas[ti]) / Math.max(areas[si], areas[ti]);
						if (areaRatio < 0.3) continue;

						var dot = normals[si].x * normals[ti].x +
							normals[si].y * normals[ti].y +
							normals[si].z * normals[ti].z;

						if (dot < -0.5) {
							if (areas[si] <= areas[ti]) {
								removeSet[si] = true;
							} else {
								removeSet[ti] = true;
							}
						} else if (dot > 0.5) {
							if (areas[si] <= areas[ti]) {
								removeSet[si] = true;
							} else {
								removeSet[ti] = true;
							}
						}
					}
				}
			}
		}
	}

	var removedCount = Object.keys(removeSet).length;
	if (removedCount === 0) {
		return tris;
	}

	var result = [];
	for (var ri = 0; ri < tris.length; ri++) {
		if (!removeSet[ri]) result.push(tris[ri]);
	}

	return result;
}

/**
 * @module repair/repairMesh
 *
 * High-level async mesh repair pipeline.
 * Runs a configurable sequence of:
 *   dedup -> T-junction resolution -> weld -> degenerate removal -> stitch -> cap -> force-close
 *
 * Each major step yields to the event loop via setTimeout(0) so the
 * caller's progress callback can update.
 */


/**
 * High-level mesh repair entry point. Runs a configurable pipeline
 * of dedup, weld, degenerate removal, stitch, cap, and force-close.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soup - Triangle soup
 * @param {Object} [config]
 * @param {string}  [config.closeMode="none"] - "none" | "weld" | "stitch"
 * @param {number}  [config.snapTolerance=0] - Weld tolerance in metres
 * @param {number}  [config.stitchTolerance=1.0] - Stitch tolerance
 * @param {boolean} [config.removeDegenerate=true] - Remove degenerate/sliver triangles
 * @param {number}  [config.sliverRatio=0.01] - Sliver aspect ratio threshold
 * @param {boolean} [config.cleanCrossings=true] - Remove over-shared edge duplicates
 * @param {boolean} [config.removeOverlapping=false] - Remove anti-parallel internal wall triangles
 * @param {number}  [config.overlapTolerance=1e-4] - Overlap detection tolerance
 * @param {Function} [onProgress] - Called with progress string, e.g. onProgress("Welding...")
 * @returns {Promise<{ points: Array<{x,y,z}>, triangles: Array<{vertices: Array}>, soup: Array }>}
 */
async function repairMesh(soup, config, onProgress) {
	if (!config) config = {};
	var closeMode = config.closeMode || "none";
	var snapTol = config.snapTolerance || 0;
	var stitchTol = config.stitchTolerance || 1.0;
	var removeDegenerate = config.removeDegenerate !== false;
	var sliverRatio = config.sliverRatio !== undefined ? config.sliverRatio : 0.01;
	var doCleanCrossings = config.cleanCrossings !== false;
	var doRemoveOverlapping = !!config.removeOverlapping;
	var overlapTol = config.overlapTolerance !== undefined ? config.overlapTolerance : 1e-4;

	function progress(msg) {
		if (typeof onProgress === "function") onProgress(msg);
	}

	// Yield to event loop so UI can update
	function yieldUI() {
		return new Promise(function (r) { setTimeout(r, 0); });
	}

	// Step 1: Deduplicate seam vertices
	progress("Deduplicating vertices...");
	await yieldUI();
	soup = deduplicateSeamVertices(soup, 1e-4);

	// Step 1.5: Resolve T-junctions
	progress("Resolving T-junctions...");
	await yieldUI();
	soup = resolveTJunctions(soup, 1e-4);

	// Step 2: Weld vertices
	progress("Welding vertices...");
	await yieldUI();
	var welded = weldVertices(soup, snapTol);
	soup = weldedToSoup(welded.triangles);

	// Step 3: Remove degenerates
	if (removeDegenerate) {
		progress("Removing degenerate triangles...");
		await yieldUI();
		soup = removeDegenerateTriangles(soup, 1e-6, sliverRatio);
	}

	// Step 3.5: Clean crossing and overlapping triangles
	if (doCleanCrossings) {
		var preCleanStats = countOpenEdges(soup);
		if (preCleanStats.overShared > 0) {
			progress("Cleaning crossing triangles...");
			await yieldUI();
			soup = cleanCrossingTriangles(soup);
		}
	}
	if (doRemoveOverlapping) {
		progress("Removing overlapping triangles...");
		await yieldUI();
		soup = removeOverlappingTriangles(soup, overlapTol);
	}

	// Step 4: Stitch + cap (if closeMode === "stitch")
	if (closeMode === "stitch") {
		progress("Stitching boundaries...");
		await yieldUI();
		var stitchTris = stitchByProximity(soup, stitchTol);
		if (stitchTris.length > 0) {
			for (var st = 0; st < stitchTris.length; st++) {
				soup.push(stitchTris[st]);
			}
		}

		// Final weld after stitch
		var finalWelded = weldVertices(soup, snapTol);
		var worldPoints = finalWelded.points;
		var triangles = finalWelded.triangles;

		// Sequential capping
		progress("Capping boundary loops...");
		await yieldUI();
		var postSoup = weldedToSoup(triangles);
		postSoup = capBoundaryLoopsSequential(postSoup, snapTol, 3);

		var cappedWeld = weldVertices(postSoup, snapTol);
		worldPoints = cappedWeld.points;
		triangles = cappedWeld.triangles;

		// Post-cap cleanup
		progress("Cleaning up post-cap mesh...");
		await yieldUI();
		var postCapSoup = weldedToSoup(triangles);
		var postCapChanged = false;

		if (doCleanCrossings) {
			var postCapStats = countOpenEdges(postCapSoup);
			if (postCapStats.overShared > 0) {
				postCapSoup = cleanCrossingTriangles(postCapSoup);
				postCapChanged = true;
			}
		}

		if (doRemoveOverlapping) {
			var preOverlapCount = postCapSoup.length;
			postCapSoup = removeOverlappingTriangles(postCapSoup, overlapTol);
			if (postCapSoup.length < preOverlapCount) postCapChanged = true;
		}

		if (removeDegenerate) {
			var preDegenCount = postCapSoup.length;
			postCapSoup = removeDegenerateTriangles(postCapSoup, 1e-6, sliverRatio);
			if (postCapSoup.length < preDegenCount) postCapChanged = true;
		}

		if (postCapChanged) {
			var postCapWeld = weldVertices(postCapSoup, snapTol);
			worldPoints = postCapWeld.points;
			triangles = postCapWeld.triangles;
		}

		// Safety net -- forceCloseIndexedMesh
		progress("Force-closing gaps...");
		await yieldUI();
		var safetyCheckSoup = weldedToSoup(triangles);
		var safetyStats = countOpenEdges(safetyCheckSoup);
		if (safetyStats.openEdges > 0) {
			var forceClosed = forceCloseIndexedMesh(worldPoints, triangles);
			worldPoints = forceClosed.points;
			triangles = forceClosed.triangles;
		}

		// Final result
		var finalSoup = weldedToSoup(triangles);
		soup = finalSoup;

		progress("Repair complete.");
		return { points: worldPoints, triangles: triangles, soup: soup };
	}

	// For non-stitch modes, just do a final weld and return
	var finalWeld = weldVertices(soup, snapTol);

	progress("Repair complete.");
	return { points: finalWeld.points, triangles: finalWeld.triangles, soup: soup };
}

/**
 * @module normals/classifyDirection
 *
 * Classify the normal direction of a triangle mesh.
 * Includes volume computation, projected area, and surface area.
 */


/**
 * Classify normal direction of a triangle mesh.
 *
 * For closed solids: uses signed volume to determine "Out" (outward-facing)
 * or "In" (inward-facing).
 *
 * For open surfaces: computes area-weighted average normal to determine
 * dominant axis (Z+, Z-, Y+, Y-, X+, X-), or "Aligned" if consistent
 * but not axis-dominant, or "Chaos" if normals are inconsistent.
 *
 * @param {Array} tris - Triangle soup
 * @param {boolean} isClosed - Whether the mesh is closed
 * @param {number} signedVolume - Signed volume from divergence theorem
 * @returns {string} Classification label
 */
function classifyNormalDirection(tris, isClosed, signedVolume) {
	if (tris.length === 0) return "N/A";

	var sumNx = 0, sumNy = 0, sumNz = 0;
	var totalArea = 0;

	for (var i = 0; i < tris.length; i++) {
		var v0 = tris[i].v0, v1 = tris[i].v1, v2 = tris[i].v2;
		var ux = v1.x - v0.x, uy = v1.y - v0.y, uz = v1.z - v0.z;
		var vx = v2.x - v0.x, vy = v2.y - v0.y, vz = v2.z - v0.z;
		var cx = uy * vz - uz * vy;
		var cy = uz * vx - ux * vz;
		var cz = ux * vy - uy * vx;
		var area = 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
		if (area < 1e-12) continue;

		sumNx += cx * 0.5;
		sumNy += cy * 0.5;
		sumNz += cz * 0.5;
		totalArea += area;
	}

	if (totalArea < 1e-12) return "N/A";

	if (isClosed) {
		if (signedVolume > 1e-6) return "Out";
		if (signedVolume < -1e-6) return "In";
	}

	var avgLen = Math.sqrt(sumNx * sumNx + sumNy * sumNy + sumNz * sumNz);
	var consistency = avgLen / totalArea;

	if (consistency < 0.15) {
		if (signedVolume > 1e-6) return isClosed ? "Out" : "~Out";
		if (signedVolume < -1e-6) return isClosed ? "In" : "~In";
		return "Chaos";
	}

	var nx = sumNx / avgLen;
	var ny = sumNy / avgLen;
	var nz = sumNz / avgLen;

	var ax = Math.abs(nx), ay = Math.abs(ny), az = Math.abs(nz);

	if (az > 0.7 && az >= ax && az >= ay) {
		return nz > 0 ? "Z+" : "Z-";
	}
	if (ax > 0.7 && ax >= ay && ax >= az) {
		return nx > 0 ? "X+" : "X-";
	}
	if (ay > 0.7 && ay >= ax && ay >= az) {
		return ny > 0 ? "Y+" : "Y-";
	}

	if (consistency > 0.5) return "Aligned";

	return "Chaos";
}

/**
 * Compute signed mesh volume from triangle soup using divergence theorem.
 * Translates to local centroid to avoid floating-point issues with large coordinates.
 *
 * @param {Array} tris - Triangle soup [{v0, v1, v2}, ...]
 * @returns {number} Signed volume (positive = outward normals)
 */
function computeSignedVolume(tris) {
	if (tris.length === 0) return 0;

	var cx = 0, cy = 0, cz = 0;
	var n = tris.length;
	for (var c = 0; c < n; c++) {
		cx += tris[c].v0.x + tris[c].v1.x + tris[c].v2.x;
		cy += tris[c].v0.y + tris[c].v1.y + tris[c].v2.y;
		cz += tris[c].v0.z + tris[c].v1.z + tris[c].v2.z;
	}
	var inv = 1.0 / (n * 3);
	cx *= inv; cy *= inv; cz *= inv;

	var vol = 0;
	for (var i = 0; i < n; i++) {
		var x0 = tris[i].v0.x - cx, y0 = tris[i].v0.y - cy, z0 = tris[i].v0.z - cz;
		var x1 = tris[i].v1.x - cx, y1 = tris[i].v1.y - cy, z1 = tris[i].v1.z - cz;
		var x2 = tris[i].v2.x - cx, y2 = tris[i].v2.y - cy, z2 = tris[i].v2.z - cz;

		vol += (x0 * (y1 * z2 - y2 * z1)
			- x1 * (y0 * z2 - y2 * z0)
			+ x2 * (y0 * z1 - y1 * z0)) / 6.0;
	}

	return vol;
}

/**
 * Compute projected footprint area onto a plane.
 * Only includes front-facing triangles to avoid double-counting.
 *
 * @param {Array} tris - Triangle soup
 * @param {"xy"|"yz"|"xz"} plane
 * @returns {number} Projected footprint area
 */
function computeProjectedArea(tris, plane) {
	var area = 0;

	for (var i = 0; i < tris.length; i++) {
		var v0 = tris[i].v0;
		var v1 = tris[i].v1;
		var v2 = tris[i].v2;
		var n = triNormal(tris[i]);

		if (plane === "xy") {
			if (n.z <= 0) continue;
			var cross2d = (v1.x - v0.x) * (v2.y - v0.y) - (v2.x - v0.x) * (v1.y - v0.y);
			area += Math.abs(cross2d) / 2.0;
		} else if (plane === "yz") {
			if (n.x <= 0) continue;
			var cross2d2 = (v1.y - v0.y) * (v2.z - v0.z) - (v2.y - v0.y) * (v1.z - v0.z);
			area += Math.abs(cross2d2) / 2.0;
		} else if (plane === "xz") {
			if (n.y <= 0) continue;
			var cross2d3 = (v1.x - v0.x) * (v2.z - v0.z) - (v2.x - v0.x) * (v1.z - v0.z);
			area += Math.abs(cross2d3) / 2.0;
		}
	}

	return area;
}

/**
 * Compute true 3D surface area (sum of actual triangle areas).
 *
 * @param {Array} tris - Triangle soup
 * @returns {number} Total surface area
 */
function compute3DSurfaceArea(tris) {
	var area = 0;

	for (var i = 0; i < tris.length; i++) {
		var v0 = tris[i].v0;
		var v1 = tris[i].v1;
		var v2 = tris[i].v2;

		var ux = v1.x - v0.x, uy = v1.y - v0.y, uz = v1.z - v0.z;
		var vx = v2.x - v0.x, vy = v2.y - v0.y, vz = v2.z - v0.z;

		var cx = uy * vz - uz * vy;
		var cy = uz * vx - ux * vz;
		var cz = ux * vy - uy * vx;

		area += 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
	}

	return area;
}

/**
 * @module boolean/closeBoundary
 *
 * Boundary closing operations for boolean result meshes. Provides two
 * strategies:
 *
 * 1. **buildCurtainAndCap** -- Extrude boundary edges vertically down to a
 *    floor plane, then triangulate the bottom cap. Useful for creating
 *    watertight solids from open surfaces.
 *
 * 2. **generateClosingTriangles** -- Iteratively fill boundary gaps by
 *    finding the nearest vertex to each boundary edge and forming a closing
 *    triangle. Works well for small gaps along seams.
 */


/**
 * Extrude remaining open boundary edges vertically down to a floor plane,
 * then triangulate the bottom cap with constrained Delaunay.
 *
 * For each boundary loop:
 * - Creates curtain wall quads (2 triangles per boundary edge)
 * - Triangulates the floor polygon with reversed winding (normals face down)
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} floorOffset - Metres below the minimum Z of the mesh (default 10)
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Additional triangles (curtain walls + bottom cap)
 */
function buildCurtainAndCap(tris, floorOffset) {
	var result = extractBoundaryLoops(tris);
	if (result.loops.length === 0) {
		return [];
	}

	// Compute floorZ from all triangle vertices
	var minZ = Infinity;
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		if (tri.v0.z < minZ) minZ = tri.v0.z;
		if (tri.v1.z < minZ) minZ = tri.v1.z;
		if (tri.v2.z < minZ) minZ = tri.v2.z;
	}
	var floorZ = minZ - (floorOffset || 10);

	var extraTris = [];

	for (var li = 0; li < result.loops.length; li++) {
		var loop = result.loops[li];

		// Build curtain walls: for each boundary edge A->B, create 2 triangles (vertical quad)
		var floorVerts = []; // floor-level vertices for bottom cap
		for (var j = 0; j < loop.length; j++) {
			var a = loop[j];
			var b = loop[(j + 1) % loop.length];

			// Top vertices are the boundary vertices
			// Bottom vertices are at floorZ with same XY
			var aBot = { x: a.x, y: a.y, z: floorZ };
			var bBot = { x: b.x, y: b.y, z: floorZ };

			// Quad: A-top -> B-top -> B-bot -> A-bot
			// Triangle 1: A-top, B-top, B-bot  (winding: outward)
			extraTris.push({ v0: a, v1: b, v2: bBot });
			// Triangle 2: A-top, B-bot, A-bot
			extraTris.push({ v0: a, v1: bBot, v2: aBot });

			floorVerts.push(aBot);
		}

		// Bottom cap: triangulate the floor polygon using Constrained Delaunay
		// Floor is flat at floorZ, so use triangulateLoop which projects to best-fit plane
		var capTris = triangulateLoop(floorVerts);
		for (var ci = 0; ci < capTris.length; ci++) {
			// Reverse winding so normals face downward
			extraTris.push({
				v0: capTris[ci].v2,
				v1: capTris[ci].v1,
				v2: capTris[ci].v0
			});
		}
	}

	return extraTris;
}

/**
 * For each boundary edge, find the nearest vertex (not already connected)
 * that can form a valid closing triangle. Iterates until no more gaps can
 * be filled or a pass adds no new triangles.
 *
 * Uses a 3D spatial grid for fast nearest-neighbor lookup and validates
 * that new edges do not exceed manifold edge sharing limits (max 2 triangles
 * per edge).
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} tris - Triangle soup
 * @param {number} maxDist - Maximum search distance for closing vertex
 * @returns {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} Updated triangle soup with closing triangles added
 */
function generateClosingTriangles(tris, maxDist) {
	/**
	 * Squared 3D distance between two points.
	 * @param {{ x: number, y: number, z: number }} a
	 * @param {{ x: number, y: number, z: number }} b
	 * @returns {number}
	 */
	function dist3sq(a, b) {
		var dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
		return dx * dx + dy * dy + dz * dz;
	}

	/**
	 * Area of a triangle in 3D via cross product.
	 * @param {{ x: number, y: number, z: number }} a
	 * @param {{ x: number, y: number, z: number }} b
	 * @param {{ x: number, y: number, z: number }} c
	 * @returns {number}
	 */
	function triArea(a, b, c) {
		var abx = b.x - a.x, aby = b.y - a.y, abz = b.z - a.z;
		var acx = c.x - a.x, acy = c.y - a.y, acz = c.z - a.z;
		var cx = aby * acz - abz * acy;
		var cy = abz * acx - abx * acz;
		var cz = abx * acy - aby * acx;
		return 0.5 * Math.sqrt(cx * cx + cy * cy + cz * cz);
	}

	var maxDistSq = maxDist * maxDist;
	var totalAdded = 0;
	var maxPasses = 20;

	for (var pass = 0; pass < maxPasses; pass++) {
		// Build edge count map and vertex position map
		var edgeMap = {};  // edgeKey -> count
		var vertPos = {};  // vKey -> {x,y,z}

		for (var i = 0; i < tris.length; i++) {
			var tri = tris[i];
			var verts = [tri.v0, tri.v1, tri.v2];
			var keys = [vKey(verts[0]), vKey(verts[1]), vKey(verts[2])];

			for (var e = 0; e < 3; e++) {
				vertPos[keys[e]] = verts[e];
				var ne = (e + 1) % 3;
				var ek = edgeKey(keys[e], keys[ne]);
				edgeMap[ek] = (edgeMap[ek] || 0) + 1;
			}
		}

		// Collect boundary edges (count === 1)
		var boundaryEdges = [];

		for (var ek2 in edgeMap) {
			if (edgeMap[ek2] === 1) {
				var parts = ek2.split("|");
				boundaryEdges.push({ k0: parts[0], k1: parts[1] });
			}
		}

		if (boundaryEdges.length === 0) {
			return tris;
		}

		// Build spatial grid of ALL vertices for fast nearest-neighbor lookup
		var cellSize = Math.max(maxDist, 1.0);
		var grid = {};
		var allKeys = Object.keys(vertPos);
		for (var vi = 0; vi < allKeys.length; vi++) {
			var vp = vertPos[allKeys[vi]];
			var gk = Math.floor(vp.x / cellSize) + "," + Math.floor(vp.y / cellSize) + "," + Math.floor(vp.z / cellSize);
			if (!grid[gk]) grid[gk] = [];
			grid[gk].push(allKeys[vi]);
		}

		// For each boundary edge, find the best closing vertex
		var newTris = [];
		var usedEdges = {}; // prevent double-closing an edge in one pass

		for (var bi = 0; bi < boundaryEdges.length; bi++) {
			var be = boundaryEdges[bi];
			var bek = edgeKey(be.k0, be.k1);
			if (usedEdges[bek]) continue;

			var v0 = vertPos[be.k0];
			var v1 = vertPos[be.k1];

			// Midpoint of boundary edge
			var mid = {
				x: (v0.x + v1.x) / 2,
				y: (v0.y + v1.y) / 2,
				z: (v0.z + v1.z) / 2
			};

			// Search nearby cells for candidate vertex
			var bestKey = null;
			var bestDistSq = Infinity;
			var mgx = Math.floor(mid.x / cellSize);
			var mgy = Math.floor(mid.y / cellSize);
			var mgz = Math.floor(mid.z / cellSize);

			for (var dx = -1; dx <= 1; dx++) {
				for (var dy = -1; dy <= 1; dy++) {
					for (var dz = -1; dz <= 1; dz++) {
						var cell = grid[(mgx + dx) + "," + (mgy + dy) + "," + (mgz + dz)];
						if (!cell) continue;
						for (var ci = 0; ci < cell.length; ci++) {
							var ck = cell[ci];
							// Skip the edge's own vertices
							if (ck === be.k0 || ck === be.k1) continue;

							var cv = vertPos[ck];
							var d2 = dist3sq(mid, cv);
							if (d2 > maxDistSq) continue;
							if (d2 >= bestDistSq) continue;

							// Check the two new edges wouldn't be over-shared (>2 uses)
							var ek0c = edgeKey(be.k0, ck);
							var ek1c = edgeKey(be.k1, ck);
							var c0 = edgeMap[ek0c] || 0;
							var c1 = edgeMap[ek1c] || 0;
							if (c0 >= 2 || c1 >= 2) continue;

							// Check triangle has reasonable area (not degenerate)
							var area = triArea(v0, v1, cv);
							if (area < 1e-6) continue;

							bestKey = ck;
							bestDistSq = d2;
						}
					}
				}
			}

			if (bestKey !== null) {
				var cv2 = vertPos[bestKey];
				newTris.push({ v0: v0, v1: v1, v2: cv2 });

				// Update edge counts so we don't double-close in this pass
				usedEdges[bek] = true;
				var ek0c2 = edgeKey(be.k0, bestKey);
				var ek1c2 = edgeKey(be.k1, bestKey);
				edgeMap[ek0c2] = (edgeMap[ek0c2] || 0) + 1;
				edgeMap[ek1c2] = (edgeMap[ek1c2] || 0) + 1;
				edgeMap[bek] = 2; // boundary edge now shared by 2 tris
			}
		}

		if (newTris.length === 0) {
			return tris;
		}

		// Append new triangles
		for (var ni = 0; ni < newTris.length; ni++) {
			tris.push(newTris[ni]);
		}
		totalAdded += newTris.length;
	}

	return tris;
}

/**
 * @module bms/bmsVertexPool
 *
 * Shared vertex pool with spatial hash deduplication.
 * Points within tolerance get merged to the same object reference.
 * Each pool vertex tracks which triangles from which mesh reference it.
 *
 * This is the foundation of the BMS pipeline — shared Steiner points
 * between both meshes are guaranteed by identity (===), not by
 * toFixed string matching.
 */

/**
 * @typedef {Object} PoolVertex
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @property {number} id - Unique integer ID for adjacency maps
 * @property {Array<{mesh: string, triIdx: number}>} triRefs - Which triangles reference this point
 */

/**
 * Create a shared vertex pool with spatial hash deduplication.
 *
 * @param {number} tolerance - Points within this distance get merged
 * @returns {{
 *   getOrCreate: function(number, number, number, {mesh: string, triIdx: number}=): PoolVertex,
 *   getAll: function(): PoolVertex[],
 *   size: function(): number
 * }}
 */
function createVertexPool(tolerance) {
	var cellSize = tolerance * 2;
	if (cellSize < 1e-12) cellSize = 1e-6;

	/** @type {Object.<string, PoolVertex[]>} */
	var grid = {};
	var allVertices = [];
	var nextId = 0;
	var tolSq = tolerance * tolerance;

	/**
	 * Hash a point into a cell key.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @returns {string}
	 */
	function cellKey(x, y, z) {
		var cx = Math.floor(x / cellSize);
		var cy = Math.floor(y / cellSize);
		var cz = Math.floor(z / cellSize);
		return cx + "," + cy + "," + cz;
	}

	/**
	 * Search the 27 neighboring cells for the nearest existing vertex
	 * within tolerance.
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @returns {PoolVertex|null}
	 */
	function findNearest(x, y, z) {
		var cx = Math.floor(x / cellSize);
		var cy = Math.floor(y / cellSize);
		var cz = Math.floor(z / cellSize);

		var bestDist = tolSq;
		var bestVert = null;

		for (var dx = -1; dx <= 1; dx++) {
			for (var dy = -1; dy <= 1; dy++) {
				for (var dz = -1; dz <= 1; dz++) {
					var key = (cx + dx) + "," + (cy + dy) + "," + (cz + dz);
					var bucket = grid[key];
					if (!bucket) continue;
					for (var i = 0; i < bucket.length; i++) {
						var v = bucket[i];
						var ex = v.x - x, ey = v.y - y, ez = v.z - z;
						var d2 = ex * ex + ey * ey + ez * ez;
						if (d2 < bestDist) {
							bestDist = d2;
							bestVert = v;
						}
					}
				}
			}
		}

		return bestVert;
	}

	/**
	 * Look up or insert a point. If a point within tolerance exists,
	 * return it (and optionally append the triRef). Otherwise create
	 * a new pool vertex.
	 *
	 * @param {number} x
	 * @param {number} y
	 * @param {number} z
	 * @param {{mesh: string, triIdx: number}} [triRef] - Optional triangle reference
	 * @returns {PoolVertex}
	 */
	function getOrCreate(x, y, z, triRef) {
		var existing = findNearest(x, y, z);
		if (existing) {
			if (triRef) {
				// Don't add duplicate triRefs
				var dominated = false;
				for (var i = 0; i < existing.triRefs.length; i++) {
					var r = existing.triRefs[i];
					if (r.mesh === triRef.mesh && r.triIdx === triRef.triIdx) {
						dominated = true;
						break;
					}
				}
				if (!dominated) {
					existing.triRefs.push(triRef);
				}
			}
			return existing;
		}

		// Create new pool vertex
		var vertex = {
			x: x,
			y: y,
			z: z,
			id: nextId++,
			triRefs: triRef ? [triRef] : []
		};

		// Insert into spatial hash
		var key = cellKey(x, y, z);
		if (!grid[key]) grid[key] = [];
		grid[key].push(vertex);

		allVertices.push(vertex);
		return vertex;
	}

	/**
	 * Return all pool vertices.
	 * @returns {PoolVertex[]}
	 */
	function getAll() {
		return allVertices;
	}

	/**
	 * Return the number of unique vertices in the pool.
	 * @returns {number}
	 */
	function size() {
		return allVertices.length;
	}

	return {
		getOrCreate: getOrCreate,
		getAll: getAll,
		size: size
	};
}

/**
 * @module bms/bmsIntersect
 *
 * Compute triangle-triangle intersections between two meshes with a
 * shared vertex pool. Every intersection segment endpoint goes through
 * the pool, so both meshes get the exact same PoolVertex object at
 * each intersection location.
 */


/**
 * Compute all intersection segments between two triangle meshes,
 * registering every endpoint in a shared vertex pool.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB
 * @param {Object} [options]
 * @param {number} [options.tolerance] - Pool vertex merge tolerance
 * @returns {{
 *   segments: Array<{ p0: PoolVertex, p1: PoolVertex, idxA: number, idxB: number }>,
 *   crossedSetA: Object.<number, Array>,
 *   crossedSetB: Object.<number, Array>,
 *   pool: Object
 * }}
 */
function bmsIntersect(trisA, trisB, options) {
	var opts = options || {};

	// Compute tolerance from average edge length if not provided
	var avgEdgeA = estimateAvgEdge(trisA);
	var avgEdgeB = estimateAvgEdge(trisB);
	var avgEdge = (avgEdgeA + avgEdgeB) / 2;
	var tolerance = opts.tolerance !== undefined ? opts.tolerance : avgEdge * 0.001;

	// Create shared vertex pool
	var pool = createVertexPool(tolerance);

	// Build spatial grid on mesh B for acceleration
	var cellSize = Math.max(avgEdgeB * 2, 0.1);
	var gridB = buildSpatialGrid(trisB, cellSize);

	var segments = [];
	var crossedSetA = {};
	var crossedSetB = {};

	for (var i = 0; i < trisA.length; i++) {
		var triA = trisA[i];
		var bbA = triBBox(triA);
		var candidates = queryGrid(gridB, bbA, cellSize);

		for (var c = 0; c < candidates.length; c++) {
			var j = candidates[c];
			var triB = trisB[j];

			var seg = triTriIntersection(triA, triB);
			if (!seg) continue;

			// Register both endpoints in the shared pool.
			// Each endpoint gets triRefs for BOTH the A triangle and B triangle
			// that produced it.
			var pv0 = pool.getOrCreate(seg.p0.x, seg.p0.y, seg.p0.z, { mesh: "A", triIdx: i });
			pool.getOrCreate(seg.p0.x, seg.p0.y, seg.p0.z, { mesh: "B", triIdx: j });

			var pv1 = pool.getOrCreate(seg.p1.x, seg.p1.y, seg.p1.z, { mesh: "A", triIdx: i });
			pool.getOrCreate(seg.p1.x, seg.p1.y, seg.p1.z, { mesh: "B", triIdx: j });

			// Skip zero-length segments (pool dedup merged both endpoints)
			if (pv0 === pv1) continue;

			var taggedSeg = { p0: pv0, p1: pv1, idxA: i, idxB: j };
			segments.push(taggedSeg);

			// Build crossed sets
			if (!crossedSetA[i]) crossedSetA[i] = [];
			crossedSetA[i].push(taggedSeg);

			if (!crossedSetB[j]) crossedSetB[j] = [];
			crossedSetB[j].push(taggedSeg);
		}
	}

	return {
		segments: segments,
		crossedSetA: crossedSetA,
		crossedSetB: crossedSetB,
		pool: pool
	};
}

/**
 * @module bms/bmsChain
 *
 * Chain intersection segments into ordered polylines using pool vertex
 * identity (integer ID lookup). No distance threshold — two segments
 * that share a pool vertex are connected by definition.
 *
 * At junction vertices (degree 3+), picks the smoothest continuation
 * by comparing outgoing directions against the incoming direction.
 */

/**
 * Chain intersection segments into ordered polylines.
 *
 * Uses pool vertex IDs for O(1) adjacency lookup. Two segments sharing
 * the same PoolVertex are guaranteed to connect (same object reference).
 *
 * At junction vertices where multiple unused segments meet, the algorithm
 * picks the segment whose direction is most aligned with the incoming
 * direction (largest dot product), preventing U-turns and backtracks.
 *
 * @param {Array<{ p0: PoolVertex, p1: PoolVertex, idxA: number, idxB: number }>} segments
 * @returns {Array<Array<PoolVertex>>} Array of polylines (each an array of pool vertices)
 */
function bmsChain(segments) {
	if (segments.length === 0) return [];

	// Build adjacency: poolVertex.id -> [{segIdx, otherEnd: PoolVertex}]
	var adj = {};

	for (var i = 0; i < segments.length; i++) {
		var seg = segments[i];
		var id0 = seg.p0.id;
		var id1 = seg.p1.id;

		if (!adj[id0]) adj[id0] = [];
		adj[id0].push({ segIdx: i, otherEnd: seg.p1 });

		if (!adj[id1]) adj[id1] = [];
		adj[id1].push({ segIdx: i, otherEnd: seg.p0 });
	}

	var used = new Uint8Array(segments.length);

	/**
	 * Compute unit direction from prev to curr.
	 * Returns null if the points are coincident.
	 */
	function direction(prev, curr) {
		var dx = curr.x - prev.x;
		var dy = curr.y - prev.y;
		var dz = curr.z - prev.z;
		var len = Math.sqrt(dx * dx + dy * dy + dz * dz);
		if (len < 1e-15) return null;
		return { x: dx / len, y: dy / len, z: dz / len };
	}

	/**
	 * Pick the best unused neighbor at `vert`. When `inDir` is provided
	 * (junction resolution), pick the neighbor whose outgoing direction
	 * has the largest dot product with inDir (smoothest continuation).
	 * When inDir is null (first step), pick any unused neighbor.
	 */
	function pickBest(vert, inDir) {
		var neighbors = adj[vert.id];
		if (!neighbors) return null;

		var best = null;
		var bestDot = -Infinity;

		for (var ni = 0; ni < neighbors.length; ni++) {
			var nb = neighbors[ni];
			if (used[nb.segIdx]) continue;

			if (!inDir) {
				// No incoming direction — return first available
				return nb;
			}

			// Compute outgoing direction and score by alignment
			var dx = nb.otherEnd.x - vert.x;
			var dy = nb.otherEnd.y - vert.y;
			var dz = nb.otherEnd.z - vert.z;
			var len = Math.sqrt(dx * dx + dy * dy + dz * dz);
			if (len < 1e-15) {
				// Degenerate segment — lowest priority
				if (!best) { best = nb; bestDot = -Infinity; }
				continue;
			}

			var dot = (dx * inDir.x + dy * inDir.y + dz * inDir.z) / len;
			if (dot > bestDot) {
				bestDot = dot;
				best = nb;
			}
		}

		return best;
	}

	var polylines = [];

	for (var s = 0; s < segments.length; s++) {
		if (used[s]) continue;
		used[s] = 1;

		// Seed: start with this segment
		var tailChain = [segments[s].p0, segments[s].p1];
		var headChain = [];

		// Extend tail with angle-based junction resolution
		while (true) {
			var tailVert = tailChain[tailChain.length - 1];
			var tailPrev = tailChain[tailChain.length - 2];
			var inDir = direction(tailPrev, tailVert);
			var nb = pickBest(tailVert, inDir);
			if (!nb) break;

			// Check if this would close the loop
			var chainStart = headChain.length > 0 ? headChain[headChain.length - 1] : tailChain[0];
			if (nb.otherEnd === chainStart) {
				used[nb.segIdx] = 1;
				tailChain.push(nb.otherEnd);
				break; // Loop closed
			}

			used[nb.segIdx] = 1;
			tailChain.push(nb.otherEnd);
		}

		// Extend head with angle-based junction resolution
		while (true) {
			var headVert, headPrev;
			if (headChain.length >= 2) {
				headVert = headChain[headChain.length - 1];
				headPrev = headChain[headChain.length - 2];
			} else if (headChain.length === 1) {
				headVert = headChain[0];
				headPrev = tailChain[0];
			} else {
				headVert = tailChain[0];
				headPrev = tailChain[1];
			}
			var hDir = direction(headPrev, headVert);
			var hNb = pickBest(headVert, hDir);
			if (!hNb) break;

			used[hNb.segIdx] = 1;
			headChain.push(hNb.otherEnd);
		}

		// Combine: reverse headChain + tailChain
		var chain;
		if (headChain.length > 0) {
			headChain.reverse();
			chain = headChain.concat(tailChain);
		} else {
			chain = tailChain;
		}

		polylines.push(chain);
	}

	return polylines;
}

/**
 * tiny-exact-math
 * Minimal rational arithmetic library for exact geometric predicates.
 */

/**
 * Compute the greatest common divisor of two BigInts using the Euclidean
 * algorithm. The result is always non-negative.
 *
 * @param {bigint} a
 * @param {bigint} b
 * @returns {bigint}
 */
function gcd(a, b) {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b !== 0n) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

/**
 * Convert a JavaScript number (integer or floating-point) to a Rational.
 *
 * Strategy: use `String(n)`, which produces the *shortest* decimal
 * representation that round-trips back to the same IEEE 754 double (Grisu /
 * Ryu algorithm in V8).  Parse the resulting decimal string into a
 * numerator/denominator pair, handling the sign, fractional part, and
 * optional scientific-notation exponent separately to avoid BigInt parsing
 * errors (e.g. BigInt("-05") would throw).
 *
 * @param {number} n
 * @returns {Rational}
 */
function fromNumber(n) {
  if (!isFinite(n)) {
    throw new RangeError("Cannot convert non-finite number to Rational");
  }
  if (n === 0) return new Rational(0n, 1n);

  const str = String(n);
  const negative = str.charCodeAt(0) === 45; // '-'
  const abs = negative ? str.slice(1) : str;

  // Handle scientific notation produced for very large / very small values
  // e.g. "1.5e-7" or "1e+21"
  const eIdx = abs.indexOf("e");
  if (eIdx !== -1) {
    const base = abs.slice(0, eIdx);
    const exp = parseInt(abs.slice(eIdx + 1), 10);
    const r = _parseDecimalString(base, negative);
    const pow = 10n ** BigInt(Math.abs(exp));
    return exp >= 0
      ? new Rational(r.numerator * pow, r.denominator)
      : new Rational(r.numerator, r.denominator * pow);
  }

  return _parseDecimalString(abs, negative);
}

/**
 * Parse a plain decimal string (no sign, no exponent) into a Rational.
 * @param {string} abs  – digits with optional "."
 * @param {boolean} negative
 * @returns {Rational}
 */
function _parseDecimalString(abs, negative) {
  const dotIndex = abs.indexOf(".");
  if (dotIndex === -1) {
    const num = negative ? -BigInt(abs) : BigInt(abs);
    return new Rational(num, 1n);
  }

  const intDigits = abs.slice(0, dotIndex) || "0";
  const fracDigits = abs.slice(dotIndex + 1);
  const combined = intDigits + fracDigits; // sign removed, safe for BigInt
  const num = negative ? -BigInt(combined) : BigInt(combined);
  const den = 10n ** BigInt(fracDigits.length);
  return new Rational(num, den);
}

/**
 * A rational number stored as two BigInts (numerator and denominator).
 * The value is always kept in lowest terms with a non-negative denominator.
 */
class Rational {
  /**
   * @param {bigint|number} numerator
   * @param {bigint|number} denominator
   */
  constructor(numerator, denominator = 1n) {
    let num = BigInt(numerator);
    let den = BigInt(denominator);

    if (den === 0n) {
      throw new RangeError("Denominator must not be zero");
    }

    // Normalise: keep denominator positive
    if (den < 0n) {
      num = -num;
      den = -den;
    }

    const g = gcd(num < 0n ? -num : num, den);
    this.numerator = num / g;
    this.denominator = den / g;
  }

  // ── Arithmetic ────────────────────────────────────────────────────────────

  /**
   * Return a new Rational equal to this + other.
   * @param {Rational} other
   * @returns {Rational}
   */
  add(other) {
    return new Rational(
      this.numerator * other.denominator + other.numerator * this.denominator,
      this.denominator * other.denominator
    );
  }

  /**
   * Return a new Rational equal to this - other.
   * @param {Rational} other
   * @returns {Rational}
   */
  subtract(other) {
    return new Rational(
      this.numerator * other.denominator - other.numerator * this.denominator,
      this.denominator * other.denominator
    );
  }

  /**
   * Return a new Rational equal to this * other.
   * @param {Rational} other
   * @returns {Rational}
   */
  multiply(other) {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator
    );
  }

  /**
   * Return a new Rational equal to this / other.
   * @param {Rational} other
   * @returns {Rational}
   */
  divide(other) {
    if (other.numerator === 0n) {
      throw new RangeError("Division by zero");
    }
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }

  // ── Comparison ────────────────────────────────────────────────────────────

  /**
   * Return the sign of this rational: -1, 0, or 1.
   * @returns {number}
   */
  sign() {
    if (this.numerator === 0n) return 0;
    return this.numerator > 0n ? 1 : -1;
  }

  /**
   * Return true if this rational equals zero.
   * @returns {boolean}
   */
  isZero() {
    return this.numerator === 0n;
  }

  /**
   * Convert to a JavaScript number (may lose precision).
   * @returns {number}
   */
  toNumber() {
    return Number(this.numerator) / Number(this.denominator);
  }

  /**
   * Human-readable string representation.
   * @returns {string}
   */
  toString() {
    if (this.denominator === 1n) return String(this.numerator);
    return `${this.numerator}/${this.denominator}`;
  }
}

// ── Geometric predicate ──────────────────────────────────────────────────────

/**
 * Compute the orientation (sign of the 2×2 determinant) of three 2-D points.
 *
 * Given points p1, p2, p3 each with numeric `x` and `y` properties, the
 * determinant is:
 *
 *   | p2.x - p1.x   p3.x - p1.x |
 *   | p2.y - p1.y   p3.y - p1.y |
 *
 * = (p2.x - p1.x)(p3.y - p1.y) - (p3.x - p1.x)(p2.y - p1.y)
 *
 * All coordinates are converted to exact Rationals before the computation so
 * the result is free of floating-point rounding error.
 *
 * @param {{ x: number, y: number }} p1
 * @param {{ x: number, y: number }} p2
 * @param {{ x: number, y: number }} p3
 * @returns {-1 | 0 | 1}  sign of the determinant
 */
function determinant(p1, p2, p3) {
  const x1 = fromNumber(p1.x);
  const y1 = fromNumber(p1.y);
  const x2 = fromNumber(p2.x);
  const y2 = fromNumber(p2.y);
  const x3 = fromNumber(p3.x);
  const y3 = fromNumber(p3.y);

  const dx2 = x2.subtract(x1);
  const dy2 = y2.subtract(y1);
  const dx3 = x3.subtract(x1);
  const dy3 = y3.subtract(y1);

  // det = dx2*dy3 - dx3*dy2
  const det = dx2.multiply(dy3).subtract(dx3.multiply(dy2));

  return det.sign();
}

/**
 * @module bms/bmsSplit
 *
 * Re-triangulate crossed triangles using shared pool vertices and produce
 * a unified mega soup. Sub-triangle vertices that are Steiner points ARE
 * the pool vertex objects (same reference), not copies.
 */


/**
 * Re-triangulate a crossed triangle using pool vertices as Steiner points.
 * The output sub-triangles reference pool vertex objects directly.
 *
 * @param {{ v0: Object, v1: Object, v2: Object }} tri - Parent triangle
 * @param {Array<{ p0: PoolVertex, p1: PoolVertex }>} segments - Intersection segments with pool vertices
 * @returns {Array<{ v0: Object, v1: Object, v2: Object }>} Sub-triangles
 */
function bmsRetriangulate(tri, segments) {
	if (!segments || segments.length === 0) return [tri];

	// -- Step 1: Build local 2D coordinate frame on triangle plane --
	var e1x = tri.v1.x - tri.v0.x;
	var e1y = tri.v1.y - tri.v0.y;
	var e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x;
	var e2y = tri.v2.y - tri.v0.y;
	var e2z = tri.v2.z - tri.v0.z;

	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return [tri];
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;

	var lnx = e1y * e2z - e1z * e2y;
	var lny = e1z * e2x - e1x * e2z;
	var lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return [tri];

	var lvx = lny * luz - lnz * luy;
	var lvy = lnz * lux - lnx * luz;
	var lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return [tri];
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	var lox = tri.v0.x, loy = tri.v0.y, loz = tri.v0.z;

	function toLocal(p) {
		var dx = p.x - lox, dy = p.y - loy, dz = p.z - loz;
		return [dx * lux + dy * luy + dz * luz, dx * lvx + dy * lvy + dz * lvz];
	}

	var l0 = toLocal(tri.v0);
	var l1 = toLocal(tri.v1);
	var l2 = toLocal(tri.v2);

	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return [tri];

	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	var triArea2D = Math.abs(baryD) * 0.5;
	var MIN_AREA_RATIO = 1e-8;

	// -- Step 2: Collect unique Steiner points from pool vertices --
	// Use pool vertex id for deduplication (exact, no toFixed)
	var seenIds = {};
	var v0Key = vKey(tri.v0), v1Key = vKey(tri.v1), v2Key = vKey(tri.v2);

	var validSteiner = []; // pool vertex objects

	// pts array: indices 0,1,2 = original vertices, 3+ = pool vertices
	var pts = [tri.v0, tri.v1, tri.v2];

	// Map pool vertex id -> index in pts array (for constraint edges)
	var idToIndex = {};

	// Also map vertex keys for original verts
	var keyToIndex = {};
	keyToIndex[v0Key] = 0;
	keyToIndex[v1Key] = 1;
	keyToIndex[v2Key] = 2;

	// Exact point-in-triangle test using rational arithmetic.
	// Projects ORIGINAL 3D coordinates to the best-fit 2D plane (XY, XZ, or YZ)
	// to avoid float errors from the toLocal projection.
	var anx = Math.abs(lnx), any = Math.abs(lny), anz = Math.abs(lnz);
	var projA, projB; // which axes to use for 2D projection
	if (anx >= any && anx >= anz) {
		// Normal dominated by X → project to YZ plane
		projA = function(v) { return v.y; };
		projB = function(v) { return v.z; };
	} else if (any >= anz) {
		// Normal dominated by Y → project to XZ plane
		projA = function(v) { return v.x; };
		projB = function(v) { return v.z; };
	} else {
		// Normal dominated by Z → project to XY plane
		projA = function(v) { return v.x; };
		projB = function(v) { return v.y; };
	}
	var tv0 = { x: projA(tri.v0), y: projB(tri.v0) };
	var tv1 = { x: projA(tri.v1), y: projB(tri.v1) };
	var tv2 = { x: projA(tri.v2), y: projB(tri.v2) };

	function exactPointInTri3D(p) {
		var pp = { x: projA(p), y: projB(p) };
		var d0 = determinant(tv0, tv1, pp);
		var d1 = determinant(tv1, tv2, pp);
		var d2 = determinant(tv2, tv0, pp);
		var hasNeg = (d0 < 0) || (d1 < 0) || (d2 < 0);
		var hasPos = (d0 > 0) || (d1 > 0) || (d2 > 0);
		return !(hasNeg && hasPos);
	}
	var BARY_TOL = -1e-4; // float fallback tolerance

	for (var s = 0; s < segments.length; s++) {
		var seg = segments[s];
		var endpts = [seg.p0, seg.p1];
		for (var e = 0; e < 2; e++) {
			var p = endpts[e];

			// Check if this pool vertex is an original vertex (by vKey match)
			var pk = vKey(p);
			if (pk === v0Key || pk === v1Key || pk === v2Key) {
				// Map the pool vertex id to the original vertex index
				if (p.id !== undefined) idToIndex[p.id] = keyToIndex[pk];
				continue;
			}

			// Skip if already added (by pool id)
			if (p.id !== undefined && seenIds[p.id]) continue;
			if (p.id !== undefined) seenIds[p.id] = true;

			// Validate: must be inside the triangle.
			// Primary: exact rational test on original 3D coords (projected to best plane)
			// Fallback: float barycentric with tolerance (handles near-edge Steiner points
			// whose computed position drifted slightly outside due to float intersection math)
			if (!exactPointInTri3D(p)) {
				var lp = toLocal(p);
				var bc = baryCoords(lp[0], lp[1]);
				if (bc[0] < BARY_TOL || bc[1] < BARY_TOL || bc[2] < BARY_TOL) {
					// Last chance: accept if the point is very close to an edge
					// (within 1% of triangle size) — intersection drift
					var minBC = Math.min(bc[0], bc[1], bc[2]);
					if (minBC < -0.01) {
						continue;
					}
				}
			}

			// Add pool vertex object directly (same reference!)
			var idx = pts.length;
			pts.push(p);
			if (p.id !== undefined) idToIndex[p.id] = idx;
			keyToIndex[pk] = idx;
			validSteiner.push(p);
		}
	}

	if (validSteiner.length === 0) return [tri];

	// -- Step 3: Project all to local 2D, run Delaunator --
	var n = pts.length;
	var coords = new Float64Array(n * 2);
	for (var j = 0; j < n; j++) {
		var lj = toLocal(pts[j]);
		coords[j * 2] = lj[0];
		coords[j * 2 + 1] = lj[1];
	}

	var del;
	try {
		del = new Delaunator(coords);
	} catch (de) {
		return [tri];
	}

	// Constrain segment edges
	try {
		var con = new Constrainautor(del);
		for (var cs = 0; cs < segments.length; cs++) {
			var cSeg = segments[cs];
			var idx0, idx1;

			// Look up by pool id first, then by vKey
			if (cSeg.p0.id !== undefined && idToIndex[cSeg.p0.id] !== undefined) {
				idx0 = idToIndex[cSeg.p0.id];
			} else {
				idx0 = keyToIndex[vKey(cSeg.p0)];
			}

			if (cSeg.p1.id !== undefined && idToIndex[cSeg.p1.id] !== undefined) {
				idx1 = idToIndex[cSeg.p1.id];
			} else {
				idx1 = keyToIndex[vKey(cSeg.p1)];
			}

			if (idx0 !== undefined && idx1 !== undefined && idx0 !== idx1) {
				try { con.constrainOne(idx0, idx1); } catch (ce2) { /* skip */ }
			}
		}
	} catch (ce) {
		// Constrainautor init failed -- unconstrained Delaunator still usable
	}

	// -- Step 4: Filter sub-triangles by barycentric centroid + area check --
	// Output uses pts[] references directly — pool vertices stay as pool vertices
	var origNx = lnx, origNy = lny, origNz = lnz;

	var result = [];
	var delTris = del.triangles;
	for (var k = 0; k < delTris.length; k += 3) {
		var a = delTris[k], b = delTris[k + 1], c = delTris[k + 2];

		// Centroid in local 2D
		var cx = (coords[a * 2] + coords[b * 2] + coords[c * 2]) / 3;
		var cy = (coords[a * 2 + 1] + coords[b * 2 + 1] + coords[c * 2 + 1]) / 3;

		var cBary = baryCoords(cx, cy);
		if (cBary[0] < -1e-6 || cBary[1] < -1e-6 || cBary[2] < -1e-6) continue;

		// Area check
		var au = coords[a * 2], av = coords[a * 2 + 1];
		var bu = coords[b * 2], bv = coords[b * 2 + 1];
		var cu2 = coords[c * 2], cv = coords[c * 2 + 1];
		var subArea = Math.abs((bu - au) * (cv - av) - (cu2 - au) * (bv - av)) * 0.5;
		if (subArea < triArea2D * MIN_AREA_RATIO) continue;

		// Check winding consistency with original triangle
		var pa = pts[a], pb = pts[b], pc = pts[c];
		var se1x = pb.x - pa.x, se1y = pb.y - pa.y, se1z = pb.z - pa.z;
		var se2x = pc.x - pa.x, se2y = pc.y - pa.y, se2z = pc.z - pa.z;
		var snx = se1y * se2z - se1z * se2y;
		var sny = se1z * se2x - se1x * se2z;
		var snz = se1x * se2y - se1y * se2x;
		var dot = snx * origNx + sny * origNy + snz * origNz;

		if (dot < 0) {
			result.push({ v0: pa, v1: pc, v2: pb });
		} else {
			result.push({ v0: pa, v1: pb, v2: pc });
		}
	}

	if (result.length === 0) return [tri];
	return result;
}

/**
 * Fan-based re-triangulation using pool vertices.
 * Chains segments using bmsChain (identity-based), then fans from original
 * vertices to consecutive chain points. GUARANTEES intersection segments
 * appear as edges in the output — no CDT constraint needed.
 *
 * Falls back to bmsRetriangulate for multi-chain, same-edge entry/exit,
 * or vertex-hit cases.
 */
function bmsFanTriangulate(tri, segments) {
	if (!segments || segments.length === 0) return [tri];

	// Step 1: Chain segments using identity-based chaining
	var chains = bmsChain(segments);

	if (chains.length !== 1 || chains[0].length < 2) {
		return bmsRetriangulate(tri, segments);
	}
	var chain = chains[0];

	// Step 2: Build local 2D frame for barycentric classification
	var verts = [tri.v0, tri.v1, tri.v2];
	var e1x = tri.v1.x - tri.v0.x, e1y = tri.v1.y - tri.v0.y, e1z = tri.v1.z - tri.v0.z;
	var e2x = tri.v2.x - tri.v0.x, e2y = tri.v2.y - tri.v0.y, e2z = tri.v2.z - tri.v0.z;
	var e1Len = Math.sqrt(e1x * e1x + e1y * e1y + e1z * e1z);
	if (e1Len < 1e-12) return bmsRetriangulate(tri, segments);
	var lux = e1x / e1Len, luy = e1y / e1Len, luz = e1z / e1Len;
	var lnx = e1y * e2z - e1z * e2y, lny = e1z * e2x - e1x * e2z, lnz = e1x * e2y - e1y * e2x;
	var lnLen = Math.sqrt(lnx * lnx + lny * lny + lnz * lnz);
	if (lnLen < 1e-12) return bmsRetriangulate(tri, segments);
	var lvx = lny * luz - lnz * luy, lvy = lnz * lux - lnx * luz, lvz = lnx * luy - lny * lux;
	var lvLen = Math.sqrt(lvx * lvx + lvy * lvy + lvz * lvz);
	if (lvLen < 1e-12) return bmsRetriangulate(tri, segments);
	lvx /= lvLen; lvy /= lvLen; lvz /= lvLen;

	function toLocal(p) {
		var ddx = p.x - tri.v0.x, ddy = p.y - tri.v0.y, ddz = p.z - tri.v0.z;
		return [ddx * lux + ddy * luy + ddz * luz, ddx * lvx + ddy * lvy + ddz * lvz];
	}
	var l0 = toLocal(tri.v0), l1 = toLocal(tri.v1), l2 = toLocal(tri.v2);
	var baryD = (l1[1] - l2[1]) * (l0[0] - l2[0]) + (l2[0] - l1[0]) * (l0[1] - l2[1]);
	if (Math.abs(baryD) < 1e-12) return bmsRetriangulate(tri, segments);

	function baryCoords(pu, pv) {
		var u = ((l1[1] - l2[1]) * (pu - l2[0]) + (l2[0] - l1[0]) * (pv - l2[1])) / baryD;
		var v = ((l2[1] - l0[1]) * (pu - l2[0]) + (l0[0] - l2[0]) * (pv - l2[1])) / baryD;
		return [u, v, 1 - u - v];
	}

	// Step 3: Identify entry/exit edges
	var EDGE_TOL = 0.02;
	var VERTEX_TOL = 0.02;
	var entryLocal = toLocal(chain[0]);
	var exitLocal = toLocal(chain[chain.length - 1]);
	var entryBary = baryCoords(entryLocal[0], entryLocal[1]);
	var exitBary = baryCoords(exitLocal[0], exitLocal[1]);

	function isAtVertex(bc) {
		var nearZero = 0;
		for (var bci = 0; bci < 3; bci++) { if (bc[bci] < VERTEX_TOL) nearZero++; }
		return nearZero >= 2;
	}
	if (isAtVertex(entryBary) || isAtVertex(exitBary)) {
		return bmsRetriangulate(tri, segments);
	}

	function edgeOf(bc) {
		if (bc[0] < EDGE_TOL && bc[0] <= bc[1] && bc[0] <= bc[2]) return 0;
		if (bc[1] < EDGE_TOL && bc[1] <= bc[0] && bc[1] <= bc[2]) return 1;
		if (bc[2] < EDGE_TOL && bc[2] <= bc[0] && bc[2] <= bc[1]) return 2;
		return -1;
	}
	var entryOpp = edgeOf(entryBary);
	var exitOpp = edgeOf(exitBary);

	if (entryOpp < 0 || exitOpp < 0 || entryOpp === exitOpp) {
		return bmsRetriangulate(tri, segments);
	}

	// Step 4: Corner, vA, vB
	var cornerIdx = -1;
	for (var ci = 0; ci < 3; ci++) {
		if (ci !== entryOpp && ci !== exitOpp) { cornerIdx = ci; break; }
	}
	if (cornerIdx < 0) return bmsRetriangulate(tri, segments);

	var corner = verts[cornerIdx];
	var vA = verts[exitOpp];
	var vB = verts[entryOpp];

	// Step 5: Winding consistency
	var origNx = e1y * e2z - e1z * e2y;
	var origNy = e1z * e2x - e1x * e2z;
	var origNz = e1x * e2y - e1y * e2x;

	function makeTri(a, b, c) {
		var se1x = b.x - a.x, se1y = b.y - a.y, se1z = b.z - a.z;
		var se2x = c.x - a.x, se2y = c.y - a.y, se2z = c.z - a.z;
		var snx = se1y * se2z - se1z * se2y;
		var sny = se1z * se2x - se1x * se2z;
		var snz = se1x * se2y - se1y * se2x;
		var dot = snx * origNx + sny * origNy + snz * origNz;
		return dot < 0 ? { v0: a, v1: c, v2: b } : { v0: a, v1: b, v2: c };
	}

	// Step 6: Build fan triangles — chain points ARE pool vertices (shared references)
	var result = [];

	// Corner fan: corner to all consecutive chain point pairs
	for (var fi = 0; fi < chain.length - 1; fi++) {
		result.push(makeTri(corner, chain[fi], chain[fi + 1]));
	}

	// Split index K
	var splitK = 0;
	var bestRatio = Infinity;
	for (var ki = 0; ki < chain.length; ki++) {
		var dA = distSq3(vA, chain[ki]);
		var dB = distSq3(vB, chain[ki]);
		var ratio = (dA < 1e-20 || dB < 1e-20) ? Infinity : (dA < dB ? dA / dB : dB / dA);
		var diff = Math.abs(1.0 - ratio);
		if (diff < bestRatio) { bestRatio = diff; splitK = ki; }
	}
	if (splitK < 1) splitK = 1;
	if (splitK > chain.length - 2) splitK = chain.length - 2;

	// Fan from vA
	for (var ai = 0; ai < splitK; ai++) {
		result.push(makeTri(vA, chain[ai], chain[ai + 1]));
	}

	// Transition triangle
	result.push(makeTri(vA, chain[splitK], vB));

	// Fan from vB
	for (var bi = splitK; bi < chain.length - 1; bi++) {
		result.push(makeTri(vB, chain[bi], chain[bi + 1]));
	}

	// Step 7: Validate — remove degenerates
	var triArea = lnLen * 0.5;
	var MIN_AREA = triArea * 1e-8;
	var validated = [];
	for (var vli = 0; vli < result.length; vli++) {
		var t = result[vli];
		var te1x = t.v1.x - t.v0.x, te1y = t.v1.y - t.v0.y, te1z = t.v1.z - t.v0.z;
		var te2x = t.v2.x - t.v0.x, te2y = t.v2.y - t.v0.y, te2z = t.v2.z - t.v0.z;
		var tcx = te1y * te2z - te1z * te2y;
		var tcy = te1z * te2x - te1x * te2z;
		var tcz = te1x * te2y - te1y * te2x;
		var subArea = Math.sqrt(tcx * tcx + tcy * tcy + tcz * tcz) * 0.5;
		if (subArea > MIN_AREA) validated.push(t);
	}

	return validated.length > 0 ? validated : bmsRetriangulate(tri, segments);
}

/**
 * Split both meshes and produce a unified mega soup where Steiner point
 * vertices are shared pool vertex objects.
 *
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisA
 * @param {Array<{ v0: Object, v1: Object, v2: Object }>} trisB
 * @param {{ segments: Array, crossedSetA: Object, crossedSetB: Object, pool: Object }} intersectResult
 * @returns {Array<{ v0: Object, v1: Object, v2: Object, mesh: string, origIdx: number }>}
 */
function bmsSplit(trisA, trisB, intersectResult) {
	var crossedSetA = intersectResult.crossedSetA;
	var crossedSetB = intersectResult.crossedSetB;
	var megaSoup = [];

	// Process mesh A
	for (var i = 0; i < trisA.length; i++) {
		if (!crossedSetA[i]) {
			// Non-crossed: pass through directly
			megaSoup.push({
				v0: trisA[i].v0,
				v1: trisA[i].v1,
				v2: trisA[i].v2,
				mesh: "A",
				origIdx: i
			});
		} else {
			// Crossed: re-triangulate with pool vertices
			var subTris = bmsFanTriangulate(trisA[i], crossedSetA[i]);
			for (var si = 0; si < subTris.length; si++) {
				megaSoup.push({
					v0: subTris[si].v0,
					v1: subTris[si].v1,
					v2: subTris[si].v2,
					mesh: "A",
					origIdx: i
				});
			}
		}
	}

	// Process mesh B
	for (var j = 0; j < trisB.length; j++) {
		if (!crossedSetB[j]) {
			megaSoup.push({
				v0: trisB[j].v0,
				v1: trisB[j].v1,
				v2: trisB[j].v2,
				mesh: "B",
				origIdx: j
			});
		} else {
			var subTrisB = bmsFanTriangulate(trisB[j], crossedSetB[j]);
			for (var sj = 0; sj < subTrisB.length; sj++) {
				megaSoup.push({
					v0: subTrisB[sj].v0,
					v1: subTrisB[sj].v1,
					v2: subTrisB[sj].v2,
					mesh: "B",
					origIdx: j
				});
			}
		}
	}

	return megaSoup;
}

/**
 * @module bms/bmsClose
 *
 * Build a single mesh edge polygon per mesh that connects ALL intersection
 * polylines together via graph-walks and traces the mesh's open boundary.
 *
 * The mesh edge poly is ONE continuous closed polygon:
 *   boundary(magenta) → graphWalk(magenta) → IL1(yellow) → graphWalk(magenta) →
 *   IL2(yellow) → graphWalk(magenta) → boundary(magenta) → back to start
 *
 * This polygon divides the mesh into inside (enclosed by intersection lines)
 * and outside (connected to the boundary).
 */


// ── Boundary extraction ──

/**
 * chainedOpenEdge — Walk the complete open boundary of a mesh as a CLOSED polygon.
 *
 * Uses a half-edge structure to correctly navigate bowtie (non-manifold)
 * vertices. At each boundary vertex, the next boundary half-edge is found
 * by walking the triangle fan around the vertex until the next boundary
 * edge is reached.
 *
 * Returns the largest loop as an ordered array of {key, vertex},
 * with the first vertex repeated at the end to close the polygon.
 * Returns [] if the mesh has no open edges.
 */
function chainedOpenEdge(tris) {
	// Step 1: Build half-edge structure
	// Each directed half-edge is keyed as "fromKey|toKey"
	var vertMap = {};     // vertKey → vertex object
	var halfEdges = {};   // "from|to" → true (exists)
	var heNextInTri = {}; // "from|to" → "to|next" (next half-edge in same triangle)

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			vertMap[ks[e]] = vs[e];
			var ne = (e + 1) % 3;
			var nne = (e + 2) % 3;
			var heKey = ks[e] + "|" + ks[ne];
			halfEdges[heKey] = true;
			// Keep first occurrence — prevents non-manifold edges from
			// overwriting with a different triangle's fan data
			if (heNextInTri[heKey] === undefined) {
				heNextInTri[heKey] = ks[ne] + "|" + ks[nne];
			}
		}
	}

	// Step 2: Find boundary half-edges (no twin exists)
	var boundary = {};  // "from|to" → true
	var bdryFromVert = {}; // vertKey → ["from|to", ...] (boundary half-edges starting from this vert)

	for (var hk in halfEdges) {
		var sep = hk.indexOf("|");
		var fromK = hk.substring(0, sep);
		var toK = hk.substring(sep + 1);
		var twin = toK + "|" + fromK;
		if (!halfEdges[twin]) {
			boundary[hk] = true;
			if (!bdryFromVert[fromK]) bdryFromVert[fromK] = [];
			bdryFromVert[fromK].push(hk);
		}
	}

	if (Object.keys(boundary).length === 0) return [];

	// Step 3: Build "next boundary" map
	// For boundary half-edge A→V, find the next boundary half-edge V→B
	// by walking the triangle fan around V:
	//   A→V is in some triangle → next in that triangle is V→C
	//   if V→C is boundary → done (next = V→C)
	//   if V→C is interior → find twin C→V → next in twin's triangle is V→D
	//   repeat until we find a boundary half-edge
	var nextBoundary = {}; // "A|V" → "V|B"

	for (var bhk in boundary) {
		var sep2 = bhk.indexOf("|");
		bhk.substring(sep2 + 1);

		// Walk the fan around V starting from the next half-edge in A→V's triangle
		var cursor = heNextInTri[bhk]; // V→C in the same triangle as A→V
		var visited = {};  // cycle detection
		visited[bhk] = true;
		var safety = 1000;

		while (safety-- > 0) {
			if (!cursor || visited[cursor]) break;
			visited[cursor] = true;
			if (boundary[cursor]) {
				nextBoundary[bhk] = cursor;
				break;
			}
			// cursor is interior V→D — find twin D→V, then get next in that triangle
			var csep = cursor.indexOf("|");
			var cFrom = cursor.substring(0, csep);
			var cTo = cursor.substring(csep + 1);
			var cTwin = cTo + "|" + cFrom;
			if (!halfEdges[cTwin]) break; // broken mesh
			cursor = heNextInTri[cTwin]; // next in twin's triangle = V→E
		}
	}

	// Step 4: Walk boundary loops using nextBoundary
	var used = {};
	var bestLoop = null;

	for (var startHE in boundary) {
		if (used[startHE]) continue;

		var loop = [];
		var cur = startHE;
		var safety2 = Object.keys(boundary).length + 2;

		while (safety2-- > 0) {
			if (used[cur]) {
				// If we closed back to start, add closing vertex
				if (cur === startHE && loop.length > 0) {
					var csep2 = cur.indexOf("|");
					var closingKey = cur.substring(0, csep2);
					loop.push({ key: closingKey, vertex: vertMap[closingKey] });
				}
				break;
			}
			used[cur] = true;
			var csep3 = cur.indexOf("|");
			var curFrom = cur.substring(0, csep3);
			loop.push({ key: curFrom, vertex: vertMap[curFrom] });

			cur = nextBoundary[cur];
			if (!cur) break;
		}

		if (!bestLoop || loop.length > bestLoop.length) bestLoop = loop;
	}

	return bestLoop || [];
}

// ── Graph walk (BFS with parent tracking) ──

/**
 * Build full mesh vertex adjacency for graph-walking.
 * Optionally excludes barrier edges (intersection segments) so walks
 * go AROUND intersections, not through them.
 *
 * @param {Array} tris - Triangle soup
 * @param {Object} [barrierEdgeSet] - Set of edge keys to exclude
 * @returns {{ adj, vertMap }}
 */
function buildMeshVertexAdj(tris, barrierEdgeSet) {
	var adj = {};
	var vertMap = {};
	var seen = {};
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(ks[e], ks[ne]);
			if (!seen[ek]) {
				seen[ek] = true;
				// Skip barrier edges — walks must go around intersections
				if (barrierEdgeSet && barrierEdgeSet[ek]) {
					// Still register the vertices in vertMap, just don't connect them
					if (!vertMap[ks[e]]) vertMap[ks[e]] = vs[e];
					if (!vertMap[ks[ne]]) vertMap[ks[ne]] = vs[ne];
					continue;
				}
				if (!adj[ks[e]]) adj[ks[e]] = [];
				if (!adj[ks[ne]]) adj[ks[ne]] = [];
				adj[ks[e]].push(ks[ne]);
				adj[ks[ne]].push(ks[e]);
			}
			if (!vertMap[ks[e]]) vertMap[ks[e]] = vs[e];
			if (!vertMap[ks[ne]]) vertMap[ks[ne]] = vs[ne];
		}
	}
	return { adj: adj, vertMap: vertMap };
}

/**
 * BFS from startKey to the nearest key in targetSet.
 * Returns {path: [...vertices], targetKey: key} or null.
 */
function graphWalkToSet(startKey, targetSet, meshAdj, meshVertMap, maxSteps) {
	if (targetSet[startKey]) return { path: meshVertMap[startKey] ? [meshVertMap[startKey]] : [], targetKey: startKey };

	var parent = {};
	parent[startKey] = null;
	var queue = [startKey];
	var head = 0;
	var found = null;

	while (head < queue.length && head < maxSteps) {
		var cur = queue[head++];
		var nbrs = meshAdj[cur];
		if (!nbrs) continue;
		for (var ni = 0; ni < nbrs.length; ni++) {
			var nk = nbrs[ni];
			if (parent[nk] !== undefined) continue;
			parent[nk] = cur;
			if (targetSet[nk]) { found = nk; break; }
			queue.push(nk);
		}
		if (found) break;
	}

	if (!found) return null;

	var pathKeys = [];
	var k = found;
	while (k !== null) { pathKeys.push(k); k = parent[k]; }
	pathKeys.reverse();

	var path = [];
	for (var pi = 0; pi < pathKeys.length; pi++) {
		var v = meshVertMap[pathKeys[pi]];
		if (v) path.push(v);
	}
	return { path: path, targetKey: found };
}

function bmsClosePolylines(polylines, trisA, trisB, megaSoup, segments) {
	if (polylines.length === 0) {
		return {
			closedPolylines: [],
			meshEdgePolys: {
				A: { segments: [], closed: false },
				B: { segments: [], closed: false }
			}
		};
	}

	// Build barrier edge set from intersection segments
	var barrierEdgeSet = {};
	if (segments) {
		for (var si = 0; si < segments.length; si++) {
			var seg = segments[si];
			var sk0 = vKey(seg.p0);
			var sk1 = vKey(seg.p1);
			barrierEdgeSet[edgeKey(sk0, sk1)] = true;
		}
	}

	// Extract mega soup triangles per mesh (includes pool vertices from splits)
	var megaSoupA = [];
	var megaSoupB = [];
	if (megaSoup) {
		for (var mi = 0; mi < megaSoup.length; mi++) {
			if (megaSoup[mi].mesh === "A") megaSoupA.push(megaSoup[mi]);
			else megaSoupB.push(megaSoup[mi]);
		}
	}

	// Build mesh edge poly for each mesh
	// Use mega soup (with pool vertices) for graph-walking, original tris for boundary
	// Pass barrier edges so walks go AROUND intersections
	var meshEpA = buildMeshEdgePoly(polylines, trisA, megaSoupA.length > 0 ? megaSoupA : trisA, barrierEdgeSet);
	var meshEpB = buildMeshEdgePoly(polylines, trisB, megaSoupB.length > 0 ? megaSoupB : trisB, barrierEdgeSet);

	// Build combined closed polylines from the mesh edge polys
	var closedPolylines = [];
	// The intersection chains themselves (for barrier purposes)
	for (var pi = 0; pi < polylines.length; pi++) {
		closedPolylines.push(polylines[pi]);
	}

	return {
		closedPolylines: closedPolylines,
		meshEdgePolys: {
			A: meshEpA,
			B: meshEpB
		}
	};
}

/**
 * Build ONE mesh edge polygon for a single mesh.
 *
 * Connects all intersection chains via graph-walks and traces the
 * mesh's open boundary. Returns an ordered list of segments, each
 * tagged as "intersection" (yellow) or "walk" (magenta).
 *
 * @param {Array<Array<PoolVertex>>} chains - All intersection polylines
 * @param {Array} meshTris - This mesh's triangles
 * @returns {{ segments: Array<{verts: Array<Object>, type: string}>, closed: boolean }}
 */
function buildMeshEdgePoly(chains, meshTris, graphTris, barrierEdgeSet) {
	if (chains.length === 0) return { segments: [], closed: false };

	// Step 1: Trace open edges — complete closed boundary polygon
	var boundaryLoop = chainedOpenEdge(meshTris);
	var hasBoundary = boundaryLoop.length > 0;

	if (!hasBoundary) {
		// Closed mesh — just trace intersection(s)
		var segs = [];
		for (var ci = 0; ci < chains.length; ci++) {
			segs.push({ verts: chains[ci].slice(), type: "intersection" });
		}
		var isClosed = chains.length > 0 && chains[0].length > 2 &&
			chains[0][0] === chains[0][chains[0].length - 1];
		return { segments: segs, closed: isClosed };
	}

	// Step 2: Build mesh vertex adjacency (barriers excluded — walks can't cross intersection)
	var meshGraph = buildMeshVertexAdj(graphTris, barrierEdgeSet);

	// Build boundary vertex set and index map
	var bdryVertSet = {};
	var bdryKeyToIdx = {};
	for (var bi = 0; bi < boundaryLoop.length; bi++) {
		bdryVertSet[boundaryLoop[bi].key] = true;
		bdryKeyToIdx[boundaryLoop[bi].key] = bi;
	}
	var bdryLen = boundaryLoop.length - 1; // edges (loop is closed, first=last)

	// Step 3: For EACH chain, find graph walks to boundary.
	//
	// Closed chains (loops): ONE graph walk — enter and exit at the same vertex.
	// Open chains: TWO graph walks — enter at one endpoint, exit at the other.
	//   gwIn:  boundary → chain entry point
	//   gwOut: chain exit point → boundary
	//
	// connections[] stores: { chainIdx, gwIn, gwOut, bdryIdxIn, bdryIdxOut }
	var connections = [];
	var MAX_BFS = 50000;

	for (var ci2 = 0; ci2 < chains.length; ci2++) {
		var chain = chains[ci2];
		var chainIsClosed = chain.length > 2 && chain[0] === chain[chain.length - 1];

		if (chainIsClosed) {
			// Closed loop: find shortest walk from ANY loop vertex to boundary
			var bestGW = null;
			var bestLen = MAX_BFS;
			var bestVertIdx = -1;
			for (var cvi = 0; cvi < chain.length; cvi++) {
				var cvKey = vKey(chain[cvi]);
				var gw = graphWalkToSet(cvKey, bdryVertSet, meshGraph.adj, meshGraph.vertMap, bestLen);
				if (gw && gw.path.length < bestLen) {
					bestLen = gw.path.length;
					bestGW = gw;
					bestVertIdx = cvi;
				}
			}
			if (bestGW) {
				var bIdx = bdryKeyToIdx[bestGW.targetKey];
				connections.push({
					chainIdx: ci2,
					entryVertIdx: bestVertIdx,
					gwIn: bestGW.path.slice().reverse(),   // boundary → intersection
					gwOut: bestGW.path.slice(),             // intersection → boundary (same path)
					bdryIdxIn: bIdx !== undefined ? bIdx : 0,
					bdryIdxOut: bIdx !== undefined ? bIdx : 0
				});
			}
		} else {
			// Open chain: find walks from BOTH endpoints
			var startKey = vKey(chain[0]);
			var endKey = vKey(chain[chain.length - 1]);
			var gwStart = graphWalkToSet(startKey, bdryVertSet, meshGraph.adj, meshGraph.vertMap, MAX_BFS);
			var gwEnd = graphWalkToSet(endKey, bdryVertSet, meshGraph.adj, meshGraph.vertMap, MAX_BFS);

			if (gwStart && gwEnd) {
				// Enter at start, exit at end
				var bIdxIn = bdryKeyToIdx[gwStart.targetKey];
				var bIdxOut = bdryKeyToIdx[gwEnd.targetKey];
				connections.push({
					chainIdx: ci2,
					entryVertIdx: 0,
					gwIn: gwStart.path.slice().reverse(),  // boundary → chain[0]
					gwOut: gwEnd.path.slice(),              // chain[last] → boundary
					bdryIdxIn: bIdxIn !== undefined ? bIdxIn : 0,
					bdryIdxOut: bIdxOut !== undefined ? bIdxOut : 0
				});
			} else if (gwStart) {
				// Only start reached boundary — use same walk in/out
				var bIdx2 = bdryKeyToIdx[gwStart.targetKey];
				connections.push({
					chainIdx: ci2,
					entryVertIdx: 0,
					gwIn: gwStart.path.slice().reverse(),
					gwOut: gwStart.path.slice(),
					bdryIdxIn: bIdx2 !== undefined ? bIdx2 : 0,
					bdryIdxOut: bIdx2 !== undefined ? bIdx2 : 0
				});
			} else if (gwEnd) {
				// Only end reached boundary — reverse chain direction
				var bIdx3 = bdryKeyToIdx[gwEnd.targetKey];
				connections.push({
					chainIdx: ci2,
					entryVertIdx: chain.length - 1,
					gwIn: gwEnd.path.slice().reverse(),
					gwOut: gwEnd.path.slice(),
					bdryIdxIn: bIdx3 !== undefined ? bIdx3 : 0,
					bdryIdxOut: bIdx3 !== undefined ? bIdx3 : 0
				});
			}
			// If neither endpoint reached boundary, skip this chain
		}
	}

	if (connections.length === 0) {
		// No chain could reach the boundary — fallback
		var fallbackSegs = [];
		for (var fi = 0; fi < chains.length; fi++) {
			fallbackSegs.push({ verts: chains[fi].slice(), type: "intersection" });
		}
		return { segments: fallbackSegs, closed: false };
	}

	// Step 4: Sort connections by boundary entry index (position around the loop).
	// This ensures we visit intersections in order as we walk the boundary.
	connections.sort(function (a, b) { return a.bdryIdxIn - b.bdryIdxIn; });

	// Step 5: Build ONE continuous closed polygon.
	//
	// Algorithm (unidirectional, visits each intersection in boundary order):
	//   START at first connection's entry boundary point
	//   for each connection i:
	//     walk boundary → to connection[i].bdryIdxIn
	//     graph walk IN → from boundary to chain entry point
	//     traverse chain (entry → exit)
	//     graph walk OUT → from chain exit to boundary
	//   walk remaining boundary → back to start
	//   = CLOSED
	var resultSegments = [];
	var startBdryIdx = connections[0].bdryIdxIn;
	// Track current position on boundary (index into boundaryLoop)
	var curBdryIdx = startBdryIdx;

	for (var ci3 = 0; ci3 < connections.length; ci3++) {
		var conn = connections[ci3];

		// 5a) Boundary segment: from current position to this connection's entry
		if (ci3 > 0) {
			var fromIdx = curBdryIdx;
			var toIdx = conn.bdryIdxIn;
			if (fromIdx !== toIdx) {
				var bdrySegVerts = [];
				if (toIdx > fromIdx) {
					for (var bsi = fromIdx; bsi <= toIdx; bsi++) {
						bdrySegVerts.push(boundaryLoop[bsi].vertex);
					}
				} else {
					// Wrap around boundary
					for (var bsi2 = fromIdx; bsi2 < bdryLen; bsi2++) {
						bdrySegVerts.push(boundaryLoop[bsi2].vertex);
					}
					for (var bsi3 = 0; bsi3 <= toIdx; bsi3++) {
						bdrySegVerts.push(boundaryLoop[bsi3].vertex);
					}
				}
				if (bdrySegVerts.length >= 2) {
					resultSegments.push({ verts: bdrySegVerts, type: "walk" });
				}
			}
		}

		// 5b) Graph walk IN: boundary → chain entry vertex
		if (conn.gwIn.length >= 2) {
			resultSegments.push({ verts: conn.gwIn, type: "walk" });
		}

		// 5c) Orient chain so entry vertex is at [0].
		var chain = chains[conn.chainIdx].slice();
		var chainIsClosed = chain.length > 2 && chain[0] === chain[chain.length - 1];
		if (conn.entryVertIdx > 0) {
			if (chainIsClosed) {
				// Rotate closed loop: walk vertex at [0] and repeated at [end]
				var rotChain = [];
				for (var rci = conn.entryVertIdx; rci < chain.length - 1; rci++) {
					rotChain.push(chain[rci]);
				}
				for (var rci2 = 0; rci2 <= conn.entryVertIdx; rci2++) {
					rotChain.push(chain[rci2]);
				}
				chain = rotChain;
			} else if (conn.entryVertIdx === chain.length - 1) {
				// Open chain entered at last vertex — reverse to enter at [0]
				chain.reverse();
			}
		}
		resultSegments.push({ verts: chain, type: "intersection" });

		// 5d) Graph walk OUT: chain exit vertex → boundary
		if (conn.gwOut.length >= 2) {
			resultSegments.push({ verts: conn.gwOut, type: "walk" });
		}

		// Update current boundary position to exit point
		curBdryIdx = conn.bdryIdxOut;
	}

	// 5e) Final boundary segment: from last exit back to first entry (closing).
	var closingVerts = [];
	if (curBdryIdx !== startBdryIdx) {
		// Walk forward from last exit to first entry (wrapping around)
		for (var cbi = curBdryIdx; cbi < bdryLen; cbi++) {
			closingVerts.push(boundaryLoop[cbi].vertex);
		}
		for (var cbi2 = 0; cbi2 <= startBdryIdx; cbi2++) {
			closingVerts.push(boundaryLoop[cbi2].vertex);
		}
	} else {
		// Same position — full boundary loop
		for (var cbi3 = startBdryIdx; cbi3 < bdryLen; cbi3++) {
			closingVerts.push(boundaryLoop[cbi3].vertex);
		}
		for (var cbi4 = 0; cbi4 <= startBdryIdx; cbi4++) {
			closingVerts.push(boundaryLoop[cbi4].vertex);
		}
	}
	if (closingVerts.length >= 2) {
		resultSegments.push({ verts: closingVerts, type: "walk" });
	}

	return { segments: resultSegments, closed: true };
}

/**
 * @module bms/bmsClassify
 *
 * Hybrid classification (v0.5.0):
 * - Open meshes: boundary topology (touches mesh boundary = outside)
 * - Closed meshes: barrier-normal dot product (other mesh's normal at barrier)
 * Also extracts per-component boundary walks for visualization.
 */


// ── Mesh boundary detection ──

/**
 * Build a set of vertex keys that lie on the mesh's open boundary.
 */
function buildBoundaryVertexSet(tris) {
	var edgeCount = {};
	var edgeVerts = {};
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = ks[e] < ks[ne] ? ks[e] + "|" + ks[ne] : ks[ne] + "|" + ks[e];
			if (!edgeCount[ek]) { edgeCount[ek] = 0; edgeVerts[ek] = [ks[e], ks[ne]]; }
			edgeCount[ek]++;
		}
	}
	var boundaryVerts = {};
	for (var ek2 in edgeCount) {
		if (edgeCount[ek2] === 1) {
			var verts = edgeVerts[ek2];
			boundaryVerts[verts[0]] = true;
			boundaryVerts[verts[1]] = true;
		}
	}
	return boundaryVerts;
}

// ── Boundary topology classification (open meshes) ──

function classifyByBoundaryTopology(comp, megaSoup, boundaryVerts) {
	for (var ti = 0; ti < comp.triIndices.length; ti++) {
		var tri = megaSoup[comp.triIndices[ti]];
		var ks = [vKey(tri.v0), vKey(tri.v1), vKey(tri.v2)];
		for (var vi = 0; vi < 3; vi++) {
			if (boundaryVerts[ks[vi]]) return false;
		}
	}
	return true;
}

// ── Walk-direction classification (open meshes, interior components) ──

/**
 * Build a map of walk edge directions from meshEdgePolys segments.
 * Returns { edgeKey → { dx, dy, dz, mx, my, mz } }
 */
function buildWalkEdgeDirMap(meshEp) {
	if (!meshEp || !meshEp.segments) return {};
	var dirMap = {};
	var prevVert = null;
	for (var si = 0; si < meshEp.segments.length; si++) {
		var seg = meshEp.segments[si];
		for (var vi = 0; vi < seg.verts.length; vi++) {
			var v = seg.verts[vi];
			if (prevVert) {
				var k0 = vKey(prevVert), k1 = vKey(v);
				if (k0 !== k1) {
					var ek = edgeKey(k0, k1);
					dirMap[ek] = {
						dx: v.x - prevVert.x, dy: v.y - prevVert.y, dz: v.z - prevVert.z,
						mx: (prevVert.x + v.x) * 0.5, my: (prevVert.y + v.y) * 0.5, mz: (prevVert.z + v.z) * 0.5
					};
				}
			}
			prevVert = v;
		}
	}
	return dirMap;
}

// ── Barrier-normal classification (closed meshes) ──

function classifyByBarrierNormal(comp, megaSoup, barrierEdges, edgeToTris) {
	var compMesh = comp.mesh;
	var dotSum = 0;
	var sampleCount = 0;
	var seenEdges = {};

	for (var ti = 0; ti < comp.triIndices.length; ti++) {
		var triIdx = comp.triIndices[ti];
		var tri = megaSoup[triIdx];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var ek = edgeKey(ks[e], ks[ne]);

			if (!barrierEdges[ek]) continue;
			if (seenEdges[ek]) continue;
			seenEdges[ek] = true;

			var otherIdx = 3 - e - ne;
			var thirdVert = vs[otherIdx];
			var edgeV0 = vs[e];
			var edgeV1 = vs[ne];

			var midX = (edgeV0.x + edgeV1.x) * 0.5;
			var midY = (edgeV0.y + edgeV1.y) * 0.5;
			var midZ = (edgeV0.z + edgeV1.z) * 0.5;
			var intoX = thirdVert.x - midX;
			var intoY = thirdVert.y - midY;
			var intoZ = thirdVert.z - midZ;

			var intoLen = Math.sqrt(intoX * intoX + intoY * intoY + intoZ * intoZ);
			if (intoLen < 1e-12) continue;
			intoX /= intoLen; intoY /= intoLen; intoZ /= intoLen;

			var sharedTris = edgeToTris[ek];
			if (!sharedTris) continue;

			var otherNx = 0, otherNy = 0, otherNz = 0;
			var foundOther = false;

			for (var si = 0; si < sharedTris.length; si++) {
				var sTri = megaSoup[sharedTris[si]];
				if (sTri.mesh === compMesh) continue;
				var e1x = sTri.v1.x - sTri.v0.x, e1y = sTri.v1.y - sTri.v0.y, e1z = sTri.v1.z - sTri.v0.z;
				var e2x = sTri.v2.x - sTri.v0.x, e2y = sTri.v2.y - sTri.v0.y, e2z = sTri.v2.z - sTri.v0.z;
				otherNx = e1y * e2z - e1z * e2y;
				otherNy = e1z * e2x - e1x * e2z;
				otherNz = e1x * e2y - e1y * e2x;
				foundOther = true;
				break;
			}
			if (!foundOther) continue;

			var otherLen = Math.sqrt(otherNx * otherNx + otherNy * otherNy + otherNz * otherNz);
			if (otherLen < 1e-12) continue;
			otherNx /= otherLen; otherNy /= otherLen; otherNz /= otherLen;

			dotSum += intoX * otherNx + intoY * otherNy + intoZ * otherNz;
			sampleCount++;
		}
	}

	if (sampleCount === 0) return false;
	return (dotSum / sampleCount) < 0;
}

// ── Per-component boundary walk extraction ──

/**
 * Extract boundary walk segments for a component.
 * Returns segments grouped by type: "intersection" (barrier) or "walk" (mesh boundary).
 *
 * @returns {Array<{ verts: Array<{x,y,z}>, type: string }>}
 */
function extractBoundaryWalk$1(comp, megaSoup, barrierEdges) {
	// Collect directed boundary half-edges
	var directedCount = {};
	var directedVerts = {};

	for (var i = 0; i < comp.triIndices.length; i++) {
		var tri = megaSoup[comp.triIndices[i]];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var dk = ks[e] + "|" + ks[ne];
			if (!directedCount[dk]) {
				directedCount[dk] = 0;
				directedVerts[dk] = { fromVert: vs[e], toVert: vs[ne] };
			}
			directedCount[dk]++;
		}
	}

	// Collect boundary half-edges with type
	var halfEdges = [];
	for (var dk2 in directedCount) {
		var parts = dk2.split("|");
		var fromK = parts[0];
		var toK = parts[1];
		var reverseK = toK + "|" + fromK;
		var ek = edgeKey(fromK, toK);

		var isBarrier = !!barrierEdges[ek];
		var reverseExists = !!directedCount[reverseK];

		if (!reverseExists || isBarrier) {
			var verts = directedVerts[dk2];
			halfEdges.push({
				from: fromK, to: toK,
				fromVert: verts.fromVert, toVert: verts.toVert,
				type: isBarrier ? "intersection" : "walk"
			});
		}
	}

	if (halfEdges.length === 0) return [];

	// Build adjacency: fromVertex -> [halfEdge indices]
	var outgoing = {};
	for (var hi = 0; hi < halfEdges.length; hi++) {
		var fk = halfEdges[hi].from;
		if (!outgoing[fk]) outgoing[fk] = [];
		outgoing[fk].push(hi);
	}

	// Chain into loops, grouping consecutive same-type edges into segments
	var used = new Array(halfEdges.length);
	for (var u = 0; u < used.length; u++) used[u] = false;

	var allSegments = [];

	for (var start = 0; start < halfEdges.length; start++) {
		if (used[start]) continue;

		// Walk this loop
		var loopEdges = [];
		var currIdx = start;
		used[currIdx] = true;
		loopEdges.push(currIdx);

		var currVert = halfEdges[currIdx].to;
		var maxIter = halfEdges.length + 1;
		var iter = 0;

		while (currVert !== halfEdges[start].from && iter < maxIter) {
			iter++;
			var candidates = outgoing[currVert];
			if (!candidates || candidates.length === 0) break;

			var bestIdx = -1;
			for (var ci = 0; ci < candidates.length; ci++) {
				if (!used[candidates[ci]]) { bestIdx = candidates[ci]; break; }
			}
			if (bestIdx === -1) break;

			used[bestIdx] = true;
			loopEdges.push(bestIdx);
			currVert = halfEdges[bestIdx].to;
		}

		if (loopEdges.length < 2) continue;

		// Group consecutive same-type edges into segments
		var segType = halfEdges[loopEdges[0]].type;
		var segVerts = [halfEdges[loopEdges[0]].fromVert, halfEdges[loopEdges[0]].toVert];

		for (var li = 1; li < loopEdges.length; li++) {
			var he = halfEdges[loopEdges[li]];
			if (he.type === segType) {
				segVerts.push(he.toVert);
			} else {
				allSegments.push({ verts: segVerts, type: segType });
				segType = he.type;
				segVerts = [he.fromVert, he.toVert];
			}
		}
		allSegments.push({ verts: segVerts, type: segType });
	}

	return allSegments;
}

// ── Main classify ──

/**
 * Hybrid classification with per-component boundary walk extraction.
 *
 * @returns {{
 *   aInside: Array, aOutside: Array, bInside: Array, bOutside: Array,
 *   componentWalks: Array<{ mesh: string, side: string, triCount: number,
 *     segments: Array<{ verts: Array, type: string }> }>
 * }}
 */
function bmsClassify(megaSoup, closedPolylines, segments, trisA, trisB, meshEdgePolys) {
	var n = megaSoup.length;

	// ── Build barriers ──
	var barrierEdges = {};
	for (var si = 0; si < segments.length; si++) {
		var seg = segments[si];
		if (seg.p0 === seg.p1) continue;
		var k0 = vKey(seg.p0), k1 = vKey(seg.p1);
		if (k0 === k1) continue;
		barrierEdges[edgeKey(k0, k1)] = true;
	}

	// ── Build edge adjacency ──
	var edgeToTris = {};
	for (var ei = 0; ei < n; ei++) {
		var eTri = megaSoup[ei];
		var eKs = [vKey(eTri.v0), vKey(eTri.v1), vKey(eTri.v2)];
		for (var ee = 0; ee < 3; ee++) {
			var ene = (ee + 1) % 3;
			var eek = edgeKey(eKs[ee], eKs[ene]);
			if (!edgeToTris[eek]) edgeToTris[eek] = [];
			edgeToTris[eek].push(ei);
		}
	}

	// ── Build neighbors excluding barriers ──
	var neighbors = new Array(n);
	for (var ni = 0; ni < n; ni++) neighbors[ni] = [];
	for (var ek3 in edgeToTris) {
		if (barrierEdges[ek3]) continue;
		var triList = edgeToTris[ek3];
		for (var a = 0; a < triList.length; a++) {
			for (var b = a + 1; b < triList.length; b++) {
				neighbors[triList[a]].push(triList[b]);
				neighbors[triList[b]].push(triList[a]);
			}
		}
	}

	// ── Barrier flood fill ──
	var componentId = new Int32Array(n);
	for (var ci = 0; ci < n; ci++) componentId[ci] = -1;

	var components = [];
	var nextCompId = 0;

	for (var seed = 0; seed < n; seed++) {
		if (componentId[seed] >= 0) continue;
		var meshTag = megaSoup[seed].mesh;

		var compId = nextCompId++;
		var triIndices = [];
		var queue = [seed];
		componentId[seed] = compId;
		var head = 0;

		while (head < queue.length) {
			var curr = queue[head++];
			triIndices.push(curr);
			var nbrs = neighbors[curr];
			for (var nbi = 0; nbi < nbrs.length; nbi++) {
				var nb = nbrs[nbi];
				if (componentId[nb] >= 0) continue;
				if (megaSoup[nb].mesh !== meshTag) continue;
				componentId[nb] = compId;
				queue.push(nb);
			}
		}

		components.push({ id: compId, mesh: meshTag, triIndices: triIndices, triCount: triIndices.length });
	}

	// ── Detect open/closed per mesh ──
	var boundaryVertsA = buildBoundaryVertexSet(trisA);
	var boundaryVertsB = buildBoundaryVertexSet(trisB);
	var isOpenA = Object.keys(boundaryVertsA).length > 0;
	var isOpenB = Object.keys(boundaryVertsB).length > 0;
	if (meshEdgePolys) {
		if (isOpenA && meshEdgePolys.A) buildWalkEdgeDirMap(meshEdgePolys.A);
		if (isOpenB && meshEdgePolys.B) buildWalkEdgeDirMap(meshEdgePolys.B);
	}

	// ── Classify each component + extract boundary walks ──
	var aInside = [], aOutside = [];
	var bInside = [], bOutside = [];
	var componentWalks = [];

	for (var gi = 0; gi < components.length; gi++) {
		var comp = components[gi];
		var isInside;

		if (comp.triCount === 0) continue;

		var meshComps = 0;
		for (var mc = 0; mc < components.length; mc++) {
			if (components[mc].mesh === comp.mesh) meshComps++;
		}

		if (meshComps === 1) {
			isInside = false;
		} else {
			var isOpen = comp.mesh === "A" ? isOpenA : isOpenB;
			var bverts = comp.mesh === "A" ? boundaryVertsA : boundaryVertsB;

			if (isOpen) {
				// Open mesh: boundary touch = outside
				// Interior components: barrier-normal (other mesh's normal at barrier)
				var touchesBoundary = !classifyByBoundaryTopology(comp, megaSoup, bverts);
				if (touchesBoundary) {
					isInside = false;
				} else {
					// Interior component — use barrier-normal (works for both meshes
					// because it checks the OTHER mesh's normal direction)
					isInside = classifyByBarrierNormal(comp, megaSoup, barrierEdges, edgeToTris);
				}
			} else {
				isInside = classifyByBarrierNormal(comp, megaSoup, barrierEdges, edgeToTris);
			}
		}

		var side = isInside ? "inside" : "outside";

		var insideArr = comp.mesh === "A" ? aInside : bInside;
		var outsideArr = comp.mesh === "A" ? aOutside : bOutside;
		var target = isInside ? insideArr : outsideArr;

		for (var oi = 0; oi < comp.triIndices.length; oi++) {
			var ot = megaSoup[comp.triIndices[oi]];
			target.push({ v0: ot.v0, v1: ot.v1, v2: ot.v2 });
		}

		// Extract boundary walk for this component
		var walkSegments = extractBoundaryWalk$1(comp, megaSoup, barrierEdges);
		componentWalks.push({
			mesh: comp.mesh,
			side: side,
			triCount: comp.triCount,
			segments: walkSegments
		});
	}

	console.log("[BMS] Classification (walk): A: " + aInside.length + " inside, " +
		aOutside.length + " outside" + (isOpenA ? " (walk)" : " (dot)") +
		". B: " + bInside.length + " inside, " +
		bOutside.length + " outside" + (isOpenB ? " (walk)" : " (dot)") +
		". Components: " + components.length + ".");

	return {
		aInside: aInside, aOutside: aOutside, bInside: bInside, bOutside: bOutside,
		componentWalks: componentWalks
	};
}

/**
 * @module bms/heffalumpClassify
 *
 * "The Heffalump is elusive and hard to pin down, but once caught,
 *  it turns out to be exactly what you needed."
 *
 * Barrier-only classification for meshes with defective topology
 * (non-manifold edges, fragmented boundaries, cracks, holes).
 *
 * Instead of asking "does this component touch the boundary?" (which
 * breaks when the boundary is fragmented into 411 pieces), the
 * heffalump asks a simpler question:
 *
 *   "Does this component touch the intersection?"
 *
 *   YES → classify by barrier-normal (which side of the cut?)
 *   NO  → outside (disconnected from the intersection = untouched)
 *
 * That's it. No boundary walk. No mesh edge polygon. No fan walk
 * through non-manifold edges. Just barriers and normals.
 * One bite at a time.
 */


// ── The Heffalump's trunk: ray casting for closed mesh classification ──
//
// When one mesh is a closed solid, we can definitively test if a point
// is inside it by casting a ray and counting crossings. Odd = inside.
// This works even when barriers don't form closed loops.

function isPointInsideClosedMesh(px, py, pz, tris) {
	// Cast ray along +Z from point, count crossings with triangles
	var crossings = 0;
	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var ax = tri.v0.x, ay = tri.v0.y, az = tri.v0.z;
		var bx = tri.v1.x, by = tri.v1.y, bz = tri.v1.z;
		var cx = tri.v2.x, cy = tri.v2.y, cz = tri.v2.z;

		// Check if (px, py) is inside the triangle's 2D projection (XY plane)
		var d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by);
		var d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy);
		var d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay);

		var hasNeg = (d1 < 0) || (d2 < 0) || (d3 < 0);
		var hasPos = (d1 > 0) || (d2 > 0) || (d3 > 0);
		if (hasNeg && hasPos) continue; // point outside triangle in XY

		// Compute Z at intersection using barycentric coords
		var det = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
		if (Math.abs(det) < 1e-20) continue;
		var invDet = 1.0 / det;
		var u = ((by - cy) * (px - cx) + (cx - bx) * (py - cy)) * invDet;
		var v = ((cy - ay) * (px - cx) + (ax - cx) * (py - cy)) * invDet;
		var w = 1.0 - u - v;
		var zHit = u * az + v * bz + w * cz;

		if (zHit > pz) crossings++;
	}
	return (crossings % 2) === 1;
}

// ── The Heffalump's tail: nearest-surface classification for open meshes ──
//
// When the other mesh is OPEN, we can't ray cast (no closed volume).
// Instead, find the nearest triangle on the open surface and check
// which side the point is on. Normal direction = outside.

function isPointInsideOpenSurface(px, py, pz, tris) {
	var bestDist = Infinity;
	var bestDot = 0;

	for (var i = 0; i < tris.length; i++) {
		var tri = tris[i];
		var tcx = (tri.v0.x + tri.v1.x + tri.v2.x) / 3;
		var tcy = (tri.v0.y + tri.v1.y + tri.v2.y) / 3;
		var tcz = (tri.v0.z + tri.v1.z + tri.v2.z) / 3;
		var dx = px - tcx, dy = py - tcy, dz = pz - tcz;
		var d = dx * dx + dy * dy + dz * dz;

		if (d < bestDist) {
			bestDist = d;
			// Triangle normal (unnormalized is fine — we only care about sign)
			var e1x = tri.v1.x - tri.v0.x, e1y = tri.v1.y - tri.v0.y, e1z = tri.v1.z - tri.v0.z;
			var e2x = tri.v2.x - tri.v0.x, e2y = tri.v2.y - tri.v0.y, e2z = tri.v2.z - tri.v0.z;
			var nx = e1y * e2z - e1z * e2y;
			var ny = e1z * e2x - e1x * e2z;
			var nz = e1x * e2y - e1y * e2x;
			bestDot = dx * nx + dy * ny + dz * nz;
		}
	}
	// Opposite to normal direction = inside (below the surface)
	return bestDot < 0;
}

// ── The Heffalump's feet: per-component boundary walk extraction ──

function extractBoundaryWalk(comp, megaSoup, barrierEdges) {
	var directedCount = {};
	var directedVerts = {};

	for (var i = 0; i < comp.triIndices.length; i++) {
		var tri = megaSoup[comp.triIndices[i]];
		var vs = [tri.v0, tri.v1, tri.v2];
		var ks = [vKey(vs[0]), vKey(vs[1]), vKey(vs[2])];

		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var dk = ks[e] + "|" + ks[ne];
			if (!directedCount[dk]) {
				directedCount[dk] = 0;
				directedVerts[dk] = { fromVert: vs[e], toVert: vs[ne] };
			}
			directedCount[dk]++;
		}
	}

	var halfEdges = [];
	for (var dk2 in directedCount) {
		var parts = dk2.split("|");
		var fromK = parts[0];
		var toK = parts[1];
		var reverseK = toK + "|" + fromK;
		var ek = edgeKey(fromK, toK);

		var isBarrier = !!barrierEdges[ek];
		var reverseExists = !!directedCount[reverseK];

		if (!reverseExists || isBarrier) {
			var verts = directedVerts[dk2];
			halfEdges.push({
				from: fromK, to: toK,
				fromVert: verts.fromVert, toVert: verts.toVert,
				type: isBarrier ? "intersection" : "walk"
			});
		}
	}

	if (halfEdges.length === 0) return [];

	var outgoing = {};
	for (var hi = 0; hi < halfEdges.length; hi++) {
		var fk = halfEdges[hi].from;
		if (!outgoing[fk]) outgoing[fk] = [];
		outgoing[fk].push(hi);
	}

	var used = new Array(halfEdges.length);
	for (var u = 0; u < used.length; u++) used[u] = false;

	var allSegments = [];

	for (var start = 0; start < halfEdges.length; start++) {
		if (used[start]) continue;

		var loopEdges = [];
		var currIdx = start;
		used[currIdx] = true;
		loopEdges.push(currIdx);

		var currVert = halfEdges[currIdx].to;
		var maxIter = halfEdges.length + 1;
		var iter = 0;

		while (currVert !== halfEdges[start].from && iter < maxIter) {
			iter++;
			var candidates = outgoing[currVert];
			if (!candidates || candidates.length === 0) break;

			var bestIdx = -1;
			for (var ci = 0; ci < candidates.length; ci++) {
				if (!used[candidates[ci]]) { bestIdx = candidates[ci]; break; }
			}
			if (bestIdx === -1) break;

			used[bestIdx] = true;
			loopEdges.push(bestIdx);
			currVert = halfEdges[bestIdx].to;
		}

		if (loopEdges.length < 2) continue;

		var segType = halfEdges[loopEdges[0]].type;
		var segVerts = [halfEdges[loopEdges[0]].fromVert, halfEdges[loopEdges[0]].toVert];

		for (var li = 1; li < loopEdges.length; li++) {
			var he = halfEdges[loopEdges[li]];
			if (he.type === segType) {
				segVerts.push(he.toVert);
			} else {
				allSegments.push({ verts: segVerts, type: segType });
				segType = he.type;
				segVerts = [he.fromVert, he.toVert];
			}
		}
		allSegments.push({ verts: segVerts, type: segType });
	}

	return allSegments;
}

// ── The Heffalump itself ──

/**
 * Barrier-only classification for meshes with defective topology.
 *
 * @param {Array} megaSoup - Split triangles with mesh tags
 * @param {Array} segments - Intersection segments with pool vertex endpoints
 * @param {Array} trisA - Original mesh A triangles (unused — heffalump doesn't need boundaries)
 * @param {Array} trisB - Original mesh B triangles (unused — heffalump doesn't need boundaries)
 * @returns {{
 *   aInside: Array, aOutside: Array, bInside: Array, bOutside: Array,
 *   componentWalks: Array
 * }}
 */
function heffalumpClassify(megaSoup, segments, trisA, trisB, opts) {
	var n = megaSoup.length;

	// ── Step 1: Build barrier edges from intersection segments ──
	var barrierEdges = {};
	for (var si = 0; si < segments.length; si++) {
		var seg = segments[si];
		if (seg.p0 === seg.p1) continue;
		var k0 = vKey(seg.p0), k1 = vKey(seg.p1);
		if (k0 === k1) continue;
		barrierEdges[edgeKey(k0, k1)] = true;
	}

	// ── Step 2: Build edge adjacency ──
	var edgeToTris = {};
	for (var ei = 0; ei < n; ei++) {
		var eTri = megaSoup[ei];
		var eKs = [vKey(eTri.v0), vKey(eTri.v1), vKey(eTri.v2)];
		for (var ee = 0; ee < 3; ee++) {
			var ene = (ee + 1) % 3;
			var eek = edgeKey(eKs[ee], eKs[ene]);
			if (!edgeToTris[eek]) edgeToTris[eek] = [];
			edgeToTris[eek].push(ei);
		}
	}

	// ── Step 3: Build neighbors excluding barriers ──
	var neighbors = new Array(n);
	for (var ni = 0; ni < n; ni++) neighbors[ni] = [];
	for (var ek3 in edgeToTris) {
		if (barrierEdges[ek3]) continue;
		var triList = edgeToTris[ek3];
		for (var a = 0; a < triList.length; a++) {
			for (var b = a + 1; b < triList.length; b++) {
				neighbors[triList[a]].push(triList[b]);
				neighbors[triList[b]].push(triList[a]);
			}
		}
	}

	// ── Step 4: Flood fill components ──
	var componentId = new Int32Array(n);
	for (var ci = 0; ci < n; ci++) componentId[ci] = -1;

	var components = [];
	var nextCompId = 0;

	for (var seed = 0; seed < n; seed++) {
		if (componentId[seed] >= 0) continue;
		var meshTag = megaSoup[seed].mesh;

		var compId = nextCompId++;
		var triIndices = [];
		var queue = [seed];
		componentId[seed] = compId;
		var head = 0;

		while (head < queue.length) {
			var curr = queue[head++];
			triIndices.push(curr);
			var nbrs = neighbors[curr];
			for (var nbi = 0; nbi < nbrs.length; nbi++) {
				var nb = nbrs[nbi];
				if (componentId[nb] >= 0) continue;
				if (megaSoup[nb].mesh !== meshTag) continue;
				componentId[nb] = compId;
				queue.push(nb);
			}
		}

		components.push({ id: compId, mesh: meshTag, triIndices: triIndices, triCount: triIndices.length });
	}

	// ── Step 5: Detect open/closed per mesh ──
	// Use a practical "closed enough" threshold — meshes with a few
	// defect edges are still functionally closed for ray casting.
	var statsA = countOpenEdges(trisA);
	var statsB = countOpenEdges(trisB);
	var isClosedA = statsA.openEdges < Math.max(10, statsA.total * 0.02);
	var isClosedB = statsB.openEdges < Math.max(10, statsB.total * 0.02);

	// ── Step 6: The Heffalump's question — one bite at a time ──
	//
	// When the other mesh is CLOSED, classify each triangle individually
	// by ray casting. This is the radial neighbourhood taken to its
	// logical conclusion: every triangle gets its own answer.
	// No flood fill, no barriers, no components — just geometry.
	//
	// When the other mesh is OPEN, fall back to barrier flood fill +
	// barrier-normal for components that touch the intersection.

	var aInside = [], aOutside = [];
	var bInside = [], bOutside = [];
	var componentWalks = [];

	for (var gi = 0; gi < components.length; gi++) {
		var comp = components[gi];
		if (comp.triCount === 0) continue;

		var otherIsClosed = comp.mesh === "A" ? isClosedB : isClosedA;
		var otherTris = comp.mesh === "A" ? trisB : trisA;
		var insideArr = comp.mesh === "A" ? aInside : bInside;
		var outsideArr = comp.mesh === "A" ? aOutside : bOutside;

		if (otherIsClosed) {
			// ── The Heffalump's trunk: per-triangle ray casting ──
			// Other mesh is closed → ray cast EACH triangle's centroid
			// through the closed mesh. One bite at a time.
			for (var ri = 0; ri < comp.triIndices.length; ri++) {
				var rt = megaSoup[comp.triIndices[ri]];
				var px = (rt.v0.x + rt.v1.x + rt.v2.x) / 3;
				var py = (rt.v0.y + rt.v1.y + rt.v2.y) / 3;
				var pz = (rt.v0.z + rt.v1.z + rt.v2.z) / 3;
				if (isPointInsideClosedMesh(px, py, pz, otherTris)) {
					insideArr.push({ v0: rt.v0, v1: rt.v1, v2: rt.v2 });
				} else {
					outsideArr.push({ v0: rt.v0, v1: rt.v1, v2: rt.v2 });
				}
			}
			// Component walk — still useful for visualization
			var walkSegs1 = extractBoundaryWalk(comp, megaSoup, barrierEdges);
			componentWalks.push({
				mesh: comp.mesh, side: "mixed", triCount: comp.triCount,
				segments: walkSegs1
			});
		} else {
			// ── The Heffalump's tail: per-triangle nearest-surface test ──
			// Other mesh is open → find nearest surface triangle for each
			// of our triangles and check which side we're on.
			// One bite at a time, same as the closed-mesh path.
			for (var oi = 0; oi < comp.triIndices.length; oi++) {
				var ot = megaSoup[comp.triIndices[oi]];
				var opx = (ot.v0.x + ot.v1.x + ot.v2.x) / 3;
				var opy = (ot.v0.y + ot.v1.y + ot.v2.y) / 3;
				var opz = (ot.v0.z + ot.v1.z + ot.v2.z) / 3;
				if (isPointInsideOpenSurface(opx, opy, opz, otherTris)) {
					insideArr.push({ v0: ot.v0, v1: ot.v1, v2: ot.v2 });
				} else {
					outsideArr.push({ v0: ot.v0, v1: ot.v1, v2: ot.v2 });
				}
			}

			var walkSegs2 = extractBoundaryWalk(comp, megaSoup, barrierEdges);
			componentWalks.push({
				mesh: comp.mesh, side: "mixed",
				triCount: comp.triCount, segments: walkSegs2
			});
		}
	}

	console.log("[heffalump] Classification: A: " + aInside.length + " inside, " +
		aOutside.length + " outside. B: " + bInside.length + " inside, " +
		bOutside.length + " outside. Components: " + components.length + ".");

	return {
		aInside: aInside, aOutside: aOutside, bInside: bInside, bOutside: bOutside,
		componentWalks: componentWalks
	};
}

// ── The Heffalump's eraser: reclassify misplaced triangles ──

/**
 * Move triangles between inside/outside groups by index.
 * Sometimes the heffalump gets a few wrong — this lets you fix them.
 *
 * @param {Object} groups - { aInside, aOutside, bInside, bOutside }
 * @param {string} mesh - "A" or "B"
 * @param {string} fromSide - "inside" or "outside"
 * @param {Array<number>} triIndices - Indices within the source array to move
 * @returns {Object} Updated groups (mutated in place)
 */
function reclassifyTriangles(groups, mesh, fromSide, triIndices) {
	var srcKey = mesh.toLowerCase() + (fromSide === "inside" ? "Inside" : "Outside");
	var dstKey = mesh.toLowerCase() + (fromSide === "inside" ? "Outside" : "Inside");
	var src = groups[srcKey];
	var dst = groups[dstKey];
	if (!src || !dst) return groups;

	// Sort descending so splicing doesn't shift later indices
	var sorted = triIndices.slice().sort(function(a, b) { return b - a; });
	for (var i = 0; i < sorted.length; i++) {
		var idx = sorted[i];
		if (idx >= 0 && idx < src.length) {
			dst.push(src[idx]);
			src.splice(idx, 1);
		}
	}
	return groups;
}

/**
 * Reclassify a single triangle identified by its centroid coordinates.
 * Useful for click-to-toggle in a 3D viewer.
 *
 * @param {Object} groups - { aInside, aOutside, bInside, bOutside }
 * @param {number} cx - Centroid X
 * @param {number} cy - Centroid Y
 * @param {number} cz - Centroid Z
 * @param {number} [tolerance=0.01] - Match tolerance
 * @returns {{ moved: boolean, mesh: string, from: string, to: string }}
 */
function reclassifyAtPoint(groups, cx, cy, cz, tolerance) {
	var tol2 = (tolerance || 0.01) * (tolerance || 0.01);
	var keys = [
		{ src: "aInside", dst: "aOutside", mesh: "A", from: "inside", to: "outside" },
		{ src: "aOutside", dst: "aInside", mesh: "A", from: "outside", to: "inside" },
		{ src: "bInside", dst: "bOutside", mesh: "B", from: "inside", to: "outside" },
		{ src: "bOutside", dst: "bInside", mesh: "B", from: "outside", to: "inside" }
	];
	for (var ki = 0; ki < keys.length; ki++) {
		var k = keys[ki];
		var arr = groups[k.src];
		if (!arr) continue;
		for (var ti = 0; ti < arr.length; ti++) {
			var tri = arr[ti];
			var tx = (tri.v0.x + tri.v1.x + tri.v2.x) / 3;
			var ty = (tri.v0.y + tri.v1.y + tri.v2.y) / 3;
			var tz = (tri.v0.z + tri.v1.z + tri.v2.z) / 3;
			var dx = tx - cx, dy = ty - cy, dz = tz - cz;
			if (dx * dx + dy * dy + dz * dz < tol2) {
				groups[k.dst].push(arr.splice(ti, 1)[0]);
				return { moved: true, mesh: k.mesh, from: k.from, to: k.to };
			}
		}
	}
	return { moved: false };
}

/**
 * Reclassify a connected region — flood fill from a seed triangle
 * to move all connected same-side triangles together.
 *
 * @param {Object} groups - { aInside, aOutside, bInside, bOutside }
 * @param {string} mesh - "A" or "B"
 * @param {string} fromSide - "inside" or "outside"
 * @param {number} seedIdx - Index of the seed triangle in the source array
 * @returns {number} Count of triangles moved
 */
function reclassifyRegion(groups, mesh, fromSide, seedIdx) {
	var srcKey = mesh.toLowerCase() + (fromSide === "inside" ? "Inside" : "Outside");
	var dstKey = mesh.toLowerCase() + (fromSide === "inside" ? "Outside" : "Inside");
	var src = groups[srcKey];
	var dst = groups[dstKey];
	if (!src || !dst || seedIdx < 0 || seedIdx >= src.length) return 0;

	// Build edge adjacency within the source array
	var PREC = 6;
	function vk(v) { return v.x.toFixed(PREC) + "," + v.y.toFixed(PREC) + "," + v.z.toFixed(PREC); }
	function ek(a, b) { return a < b ? a + "|" + b : b + "|" + a; }

	var edgeToIdx = {};
	for (var i = 0; i < src.length; i++) {
		var tri = src[i];
		var ks = [vk(tri.v0), vk(tri.v1), vk(tri.v2)];
		for (var e = 0; e < 3; e++) {
			var ne = (e + 1) % 3;
			var key = ek(ks[e], ks[ne]);
			if (!edgeToIdx[key]) edgeToIdx[key] = [];
			edgeToIdx[key].push(i);
		}
	}

	// Flood fill from seed
	var visited = {};
	visited[seedIdx] = true;
	var queue = [seedIdx];
	var head = 0;
	while (head < queue.length) {
		var curr = queue[head++];
		var ct = src[curr];
		var cks = [vk(ct.v0), vk(ct.v1), vk(ct.v2)];
		for (var ce = 0; ce < 3; ce++) {
			var cne = (ce + 1) % 3;
			var cek = ek(cks[ce], cks[cne]);
			var nbrs = edgeToIdx[cek];
			if (!nbrs) continue;
			for (var ni = 0; ni < nbrs.length; ni++) {
				if (!visited[nbrs[ni]]) {
					visited[nbrs[ni]] = true;
					queue.push(nbrs[ni]);
				}
			}
		}
	}

	// Move all visited triangles (descending order for safe splicing)
	var toMove = Object.keys(visited).map(Number).sort(function(a, b) { return b - a; });
	for (var mi = 0; mi < toMove.length; mi++) {
		dst.push(src.splice(toMove[mi], 1)[0]);
	}
	return toMove.length;
}

// ── Decision tree: should we send the heffalump? ──

/**
 * Detect whether a mesh pair needs the heffalump classifier.
 * Non-manifold edges = defective boundary = heffalump territory.
 *
 * @param {Array} trisA
 * @param {Array} trisB
 * @returns {boolean}
 */
function shouldUseHeffalump(trisA, trisB) {
	var statsA = countOpenEdges(trisA);
	var statsB = countOpenEdges(trisB);
	return statsA.overShared > 0 || statsB.overShared > 0;
}

/**
 * @module bms/bmsBooleanOp
 *
 * Main entry point for the BMS (Brent's Mega Soup) boolean pipeline.
 *
 * Pipeline:
 *   1. bmsIntersect  — shared vertex pool + spatial grid
 *   2. bmsSplit      — CDT with pool vertices → mega soup
 *   3. bmsChain      — identity-based segment chaining
 *   4. bmsClose      — close polylines along boundary edges
 *   5. bmsClassify   — per-region boundary walk, winding = inside/outside
 */


/**
 * Flip the winding order of all triangles in a soup.
 * @param {Array} tris
 * @returns {Array}
 */
function flipSoup(tris) {
	var result = [];
	for (var i = 0; i < tris.length; i++) {
		var t = tris[i];
		result.push({
			v0: { x: t.v0.x, y: t.v0.y, z: t.v0.z },
			v1: { x: t.v2.x, y: t.v2.y, z: t.v2.z },
			v2: { x: t.v1.x, y: t.v1.y, z: t.v1.z }
		});
	}
	return result;
}

/**
 * Run the full BMS boolean pipeline.
 *
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupA
 * @param {Array<{ v0: {x,y,z}, v1: {x,y,z}, v2: {x,y,z} }>} soupB
 * @param {"subtract"|"union"|"intersect"} [operation] - If omitted, returns split groups only
 * @param {Object} [options]
 * @param {boolean} [options.preRepair] - Resolve T-junctions + weld boundary before splitting
 * @param {number} [options.tolerance] - Vertex pool tolerance
 * @returns {{
 *   groups: { aInside: Array, aOutside: Array, bInside: Array, bOutside: Array },
 *   segments: Array,
 *   polylines: Array,
 *   megaSoup: Array,
 *   pool: Object
 * }|null}
 */
function bmsBooleanOp(soupA, soupB, operation, options) {
	if (!soupA || !soupB || soupA.length === 0 || soupB.length === 0) {
		return null;
	}

	var opts = options || {};

	// Step 0) Translate to origin for floating-point precision (UTM, mine coords)
	var centroid = soupCentroid(soupA, soupB);
	var cx = centroid.x, cy = centroid.y, cz = centroid.z;
	soupA = translateSoup(soupA, -cx, -cy, -cz);
	soupB = translateSoup(soupB, -cx, -cy, -cz);

	// Step 1) Optional pre-repair
	if (opts.preRepair) {
		var tolA = opts.tolerance !== undefined ? opts.tolerance : estimateAvgEdge(soupA) * 0.01;
		var tolB = opts.tolerance !== undefined ? opts.tolerance : estimateAvgEdge(soupB) * 0.01;
		soupA = resolveTJunctions(soupA, tolA, 3);
		soupA = weldBoundaryVertices(soupA, tolA);
		soupB = resolveTJunctions(soupB, tolB, 3);
		soupB = weldBoundaryVertices(soupB, tolB);
	}

	// Step 2) Intersect with shared vertex pool
	var isect = bmsIntersect(soupA, soupB, { tolerance: opts.tolerance });

	if (isect.segments.length === 0) {
		// No intersection — everything is outside, translate back
		return {
			groups: {
				aInside: [],
				aOutside: translateSoup(soupA, cx, cy, cz),
				bInside: [],
				bOutside: translateSoup(soupB, cx, cy, cz)
			},
			segments: [],
			polylines: [],
			megaSoup: null,
			pool: isect.pool
		};
	}

	// Step 3) Split both meshes into mega soup
	var megaSoup = bmsSplit(soupA, soupB, isect);

	// Step 4) Chain intersection segments
	var polylines = bmsChain(isect.segments);

	// Step 5) Choose classification path.
	// Clean meshes → ige walk (boundary topology + barrier-normal hybrid)
	// Defective meshes → heffalump (barrier-only, no boundary needed)
	var useHeffalump = opts.forceHeffalump || shouldUseHeffalump(soupA, soupB);

	var closedPolylines, meshEdgePolys, classifyResult;

	if (useHeffalump) {
		// The heffalump doesn't need boundary walks for classification,
		// but we still build meshEdgePolys from raw chains for visualization
		// (so Intersect/Walks toggles work in all views).
		var hefEpA = { segments: [], closed: false };
		var hefEpB = { segments: [], closed: false };
		for (var hpi = 0; hpi < polylines.length; hpi++) {
			hefEpA.segments.push({ verts: polylines[hpi].slice(), type: "intersection" });
			hefEpB.segments.push({ verts: polylines[hpi].slice(), type: "intersection" });
		}
		closedPolylines = polylines;
		meshEdgePolys = { A: hefEpA, B: hefEpB };
		classifyResult = heffalumpClassify(megaSoup, isect.segments, soupA, soupB);
	} else {
		// Clean mesh path — close polylines along boundary + ige walk classification
		var closeResult = bmsClosePolylines(polylines, soupA, soupB, megaSoup, isect.segments);
		closedPolylines = closeResult.closedPolylines;
		meshEdgePolys = closeResult.meshEdgePolys;
		classifyResult = bmsClassify(megaSoup, closedPolylines, isect.segments, soupA, soupB, meshEdgePolys);
	}

	var groups = {
		aInside: classifyResult.aInside,
		aOutside: classifyResult.aOutside,
		bInside: classifyResult.bInside,
		bOutside: classifyResult.bOutside
	};

	// Step 7) Deduplicate seam vertices, then translate back to original coordinates
	if (groups.aInside.length > 0) groups.aInside = translateSoup(deduplicateSeamVertices(groups.aInside, 1e-4), cx, cy, cz);
	if (groups.aOutside.length > 0) groups.aOutside = translateSoup(deduplicateSeamVertices(groups.aOutside, 1e-4), cx, cy, cz);
	if (groups.bInside.length > 0) groups.bInside = translateSoup(deduplicateSeamVertices(groups.bInside, 1e-4), cx, cy, cz);
	if (groups.bOutside.length > 0) groups.bOutside = translateSoup(deduplicateSeamVertices(groups.bOutside, 1e-4), cx, cy, cz);

	// Translate meshEdgePolys and componentWalks verts back to original coordinates
	function translatePolyVerts(meshEps) {
		if (!meshEps) return;
		var keys = ["A", "B"];
		for (var ki = 0; ki < keys.length; ki++) {
			var ep = meshEps[keys[ki]];
			if (!ep || !ep.segments) continue;
			for (var si2 = 0; si2 < ep.segments.length; si2++) {
				var vs = ep.segments[si2].verts;
				if (!vs) continue;
				for (var vi = 0; vi < vs.length; vi++) {
					vs[vi] = { x: vs[vi].x + cx, y: vs[vi].y + cy, z: vs[vi].z + cz };
				}
			}
		}
	}
	translatePolyVerts(meshEdgePolys);

	// Translate componentWalk verts back
	if (classifyResult.componentWalks) {
		for (var cwi = 0; cwi < classifyResult.componentWalks.length; cwi++) {
			var segs = classifyResult.componentWalks[cwi].segments;
			for (var csi = 0; csi < segs.length; csi++) {
				var cvs = segs[csi].verts;
				if (!cvs) continue;
				for (var cvi = 0; cvi < cvs.length; cvi++) {
					cvs[cvi] = { x: cvs[cvi].x + cx, y: cvs[cvi].y + cy, z: cvs[cvi].z + cz };
				}
			}
		}
	}

	// Translate intersection segments and polylines back to original coordinates
	for (var tsi = 0; tsi < isect.segments.length; tsi++) {
		var tseg = isect.segments[tsi];
		tseg.p0 = { x: tseg.p0.x + cx, y: tseg.p0.y + cy, z: tseg.p0.z + cz, id: tseg.p0.id };
		tseg.p1 = { x: tseg.p1.x + cx, y: tseg.p1.y + cy, z: tseg.p1.z + cz, id: tseg.p1.id };
	}
	if (polylines) {
		for (var tpi = 0; tpi < polylines.length; tpi++) {
			var tpl = polylines[tpi];
			for (var tpj = 0; tpj < tpl.length; tpj++) {
				tpl[tpj] = { x: tpl[tpj].x + cx, y: tpl[tpj].y + cy, z: tpl[tpj].z + cz, id: tpl[tpj].id };
			}
		}
	}

	var result = {
		groups: groups,
		segments: isect.segments,
		polylines: closedPolylines,
		rawPolylines: polylines,
		meshEdgePolys: meshEdgePolys,
		componentWalks: classifyResult.componentWalks,
		megaSoup: megaSoup,
		pool: isect.pool
	};

	// Step 8) If operation specified, combine groups
	if (operation) {
		var combined = [];

		if (operation === "subtract") {
			combined = groups.aOutside.concat(flipSoup(groups.bInside));
		} else if (operation === "union") {
			combined = groups.aOutside.concat(groups.bOutside);
		} else if (operation === "intersect") {
			combined = groups.aInside.concat(groups.bInside);
		}

		if (combined.length > 0) {
			var welded = weldVertices(combined, 1e-4);
			result.result = {
				soup: combined,
				points: welded.points,
				triangles: welded.triangles
			};
		} else {
			result.result = null;
		}
	}

	return result;
}

export { bboxOverlap, bmsBooleanOp, bmsChain, bmsClassify, bmsClosePolylines, bmsIntersect, bmsSplit, boolean, buildCurtainAndCap, buildSpatialGrid, buildSpatialGridOnAxes, capBoundaryLoops, capBoundaryLoopsSequential, chainSegments, chainedOpenEdge, classifyByFloodFill, classifyNormalDirection, classifyPointMultiAxis, cleanCrossingTriangles, compute3DSurfaceArea, computeBBox, computeBounds, computeProjectedArea, computeSignedVolume, countOpenEdges, createVertexPool, cross, deduplicateSeamVertices, dist3, distSq3, edgeKey, ensureZUpNormals, estimateAvgEdge, extractBoundaryLoops, fanTriangulate, fillOpenEdgeLoops, findConnectedComponents, flipAllNormals, forceCloseIndexedMesh, generateClosingTriangles, heffalumpClassify, weldedToSoup as indexedToSoup, intersectMeshPair, intersectMeshPairTagged, lerpVert, mergeComponents, mergeSmallComponents, mergeSplitGroups, queryGrid, queryGridOnAxes, reclassifyAtPoint, reclassifyRegion, reclassifyTriangles, removeDegenerateTriangles, removeOverlappingTriangles, repairMesh, resolveTJunctions, retriangulateWithSteinerPoints, selectSplits, shouldUseHeffalump, simplifyPolyline, weldVertices as soupToIndexed, splitMeshPair, splitToComponents, stitchByProximity, triBBox, triNormal, triTriIntersection, triTriIntersectionDetailed, triangleArea3D, triangulateLoop, vKey, weldBoundaryVertices, weldVertices, weldedToSoup };
//# sourceMappingURL=trimesh-boolean.esm.js.map
