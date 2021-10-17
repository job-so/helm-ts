export declare type GlobalFlags = {
  "kube-apiserver"?: string; // the address and the port for the Kubernetes API server
  "kube-as-group"?: string[]; // group to impersonate for the operation, this flag can be repeated to specify multiple groups.
  "kube-as-user"?: string; // username to impersonate for the operation
  "kube-ca-file"?: string; // the certificate authority file for the Kubernetes API server connection
  "kube-context"?: string; // name of the kubeconfig context to use
  "kube-token"?: string; // bearer token used for authentication
  kubeconfig?: string; // path to the kubeconfig file
  namespace?: string; // namespace scope for this request
  "registry-config"?: string; // path to the registry config file (default "/home/ogrosjeanne/.config/helm/registry.json")
  "repository-cache"?: string; // path to the file containing cached repository indexes (default "/home/ogrosjeanne/.cache/helm/repository")
  "repository-config"?: string; // path to the file containing repository names and URLs (default "/home/ogrosjeanne/.config/helm/repositories.yaml")
};

export type ListFlags = GlobalFlags & {
  allNamespaces?: boolean;
};

export type InstallFlags = GlobalFlags & {};

export type Release = {
  name: string;
  namespace: string;
  revision: string;
  updated: string;
  status:
    | "unknown"
    | "deployed"
    | "uninstalled"
    | "superseded"
    | "failed"
    | "uninstalling"
    | "pending-install"
    | "pending-upgrade"
    | "pending-rollback";
  chart: string;
  app_version: string;
};

export type Repo = {
  name: string;
  url: string;
};

export type RepoAddFlags = GlobalFlags & {
  username?: string;
  password?: string;
};

export type RepoListFlags = GlobalFlags & {};
