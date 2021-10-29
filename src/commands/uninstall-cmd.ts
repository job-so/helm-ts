import { UninstallFlags, Release } from "../types";
import { getAliasedGlobalFlags } from "./helm-cmd";
import { runCommand, buildFlagsString } from "../utils/helpers";

const buildHelmUninstallCmd = (name: string, flags: UninstallFlags = {}) => {
  const allFlags = {
    ...getAliasedGlobalFlags(flags),
  };
  const flagsString = buildFlagsString(allFlags);
  return `helm uninstall ${name} ${flagsString}`;
};

/**
 * This command uninstalls a release.
 * The install argument must be a release reference,
 *
 * @param name name
 * @param flags flags
 */
const uninstall = async (
  name: string,
  flags: UninstallFlags = {}
): Promise<Release> => {
  const command = buildHelmUninstallCmd(name, flags);
  const stdout = await runCommand(command);
  return JSON.parse(stdout);
};

export default uninstall;
