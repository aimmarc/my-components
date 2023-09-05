function _bem(prefixName, blockSuffix, element, modifiler) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifiler) {
    prefixName += `--${modifiler}`;
  }
  return prefixName;
}
function createBEM(prefixName) {
  const b = (blockSuffix = "") => _bem(prefixName, blockSuffix, "", "");
  const e = (element = "") => element ? _bem(prefixName, "", element, "") : "";
  const m = (modifiler = "") => modifiler ? _bem(prefixName, "", "", modifiler) : "";
  const be = (blockSuffix = "", element = "") => blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  const em = (element = "", modifiler = "") => modifiler && element ? _bem(prefixName, "", element, modifiler) : "";
  const bm = (blockSuffix = "", modifiler = "") => blockSuffix && modifiler ? _bem(prefixName, blockSuffix, "", modifiler) : "";
  const bem = (blockSuffix = "", element = "", modifiler = "") => blockSuffix && modifiler && element ? _bem(prefixName, blockSuffix, element, modifiler) : "";
  const is = (name, state) => state ? `is-${name}` : "";
  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  };
}
function createNamespace(name) {
  const prefixName = `my-${name}`;
  return createBEM(prefixName);
}

export { createNamespace };
