module.exports = {
  branches: [
    "+([0-9])?(.{+([0-9]),x}).x",
    "{main,master}",
    {
      name: "rc",
      prerelease: true,
    },
    {
      name: "beta",
      prerelease: true,
    },
    {
      name: "alpha",
      prerelease: true,
    },
  ],
};
