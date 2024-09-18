import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("plh_teens");
import { SKINS } from "./skins";

/**
 * The default config should ideally be a superset of any extended configs
 * to allow for easier post-processing
 */

config.google_drive = {
  sheets_folder_ids: ["1_r77FxTtub64tbHL1EgF2CZDkQShxaES","1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo"],
  assets_folder_ids: ["1bT13rBBqxkzAw-kl_T5rbijT6rysLfLB"],
};
config.android = {
  splash_asset_path: "packages/app-data/assets/global/android/splash.png",
  icon_asset_path: "packages/app-data/assets/global/android/icon.png",
  icon_asset_foreground_path: "packages/app-data/assets/global/android/icon-foreground.png",
  icon_asset_background_path: "packages/app-data/assets/global/android/icon-background.png",
};

config.git = {
  content_repo: "https://github.com/IDEMSInternational/plh-teens-app-content.git",
  content_tag_latest: "1.1.5",
};

config.api.db_name = "plh_teens"
config.app_data.output_path = "./app_data";

config.app_data.assets_filter_function = (fileEntry) => !fileEntry.relativePath.includes("uncompressed")

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "ParentApp";
config.app_config.APP_HEADER_DEFAULTS.title = "ParentApp";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from ParentApp";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from ParentApp";
config.app_config.APP_SKINS.defaultSkinName = SKINS.modular.name;
config.app_config.APP_SKINS.available = [SKINS.modular, SKINS.weekly_workshop];
config.app_config.APP_THEMES.available = ["default", "professional"];
config.app_config.TASKS.enabled = true;
config.app_config.APP_UPDATES.enabled = true;
config.app_config.APP_UPDATES.completeUpdateTemplate = "app_update_complete";

export default config;
