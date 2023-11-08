export const OWNER = "Sensing";
export const REPO = "Sensing ChatRobot";
export const REPO_URL = `http://www.sensingsz.com/`;
export const ISSUE_URL = `http://www.sensingsz.com/`;
export const UPDATE_URL = `${REPO_URL}`;
export const RELEASE_URL = `${REPO_URL}`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";
export const DEFAULT_API_HOST = "https://chatgpt1.nextweb.fun/api/proxy";
export const DEFAULT_CORS_HOST = "https://ab.nextweb.fun";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatRobot, a large language model trained by Sensing.
Knowledge cutoff: 2023-09
Current model: {{model}}
Current time: {{time}}`;

export const DEFAULT_MODELS = [
  {
    name: "文心一言",
    available: true,
  },
  // {
  //   name: "gpt-4-0314",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-0613",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0314",
  //   available: true,
  // },
  // {
  //   name: "gpt-4-32k-0613",
  //   available: true,
  // },
  {
    name: "gpt-3.5-turbo",
    available: true,
  },
  // {
  //   name: "gpt-3.5-turbo-0301",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-0613",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-16k",
  //   available: true,
  // },
  // {
  //   name: "gpt-3.5-turbo-16k-0613",
  //   available: true,
  // },
] as const;
