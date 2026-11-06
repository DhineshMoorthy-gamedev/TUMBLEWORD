use std::fs;
use std::path::PathBuf;
use tauri::Manager;

/// Mirror all rotatle_* localStorage keys (passed as a JSON string) to
/// %APPDATA%\com.olaidigitalstudios.rotatle\save.json so the player's
/// progress is backed up even if the browser storage is cleared.
#[tauri::command]
fn backup_save_data(app_handle: tauri::AppHandle, payload: String) -> Result<(), String> {
    let data_dir: PathBuf = app_handle
        .path()
        .app_data_dir()
        .map_err(|e| e.to_string())?;

    fs::create_dir_all(&data_dir).map_err(|e| e.to_string())?;

    let save_path = data_dir.join("save.json");
    fs::write(&save_path, payload).map_err(|e| e.to_string())?;

    println!("[Tauri] Desktop backup written to {:?}", save_path);
    Ok(())
}

#[tauri::command]
fn open_external_url(app_handle: tauri::AppHandle, url: String) -> Result<(), String> {
    use tauri_plugin_shell::ShellExt;
    app_handle
        .shell()
        .open(&url, None)
        .map_err(|e| e.to_string())
}

/// Application entry-point (called from main.rs).
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![backup_save_data, open_external_url])
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
