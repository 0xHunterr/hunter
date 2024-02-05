import os
import platform
import requests
import zipfile
import tarfile

def get_os_type():
    system = platform.system().lower()

    if system == "linux":
        return "linux"
    elif system == "darwin":
        return "darwin"
    elif system == "windows":
        return "windows"

    print(f"Unsupported operating system: {system}")
    exit(1)

def download_latest_release():
    repo_owner = "projectdiscovery"
    repo_name = "subfinder"
    api_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}/releases/latest"
    
    os_type = get_os_type()

    response = requests.get(api_url)
    
    if response.status_code == 200:
        release_info = response.json()

        asset_url = None
        for asset in release_info['assets']:
            if os_type in asset['name'].lower():
                asset_url = asset['browser_download_url']
                break

        if asset_url:
            response = requests.get(asset_url, stream=True)
            archive_file_name = os.path.basename(asset_url)
            
            print(f"Downloading: {archive_file_name}")

            
            dep_folder = "Dep"
            if not os.path.exists(dep_folder):
                os.makedirs(dep_folder)

            file_path = os.path.join(dep_folder, archive_file_name)

            with open(file_path, "wb") as file:
                for chunk in response.iter_content(chunk_size=8192):
                    file.write(chunk)

            if archive_file_name.endswith(".zip"):
                extract_zip_archive(file_path, dep_folder)
            elif archive_file_name.endswith(".tar.gz") or archive_file_name.endswith(".tgz"):
                extract_tar_archive(file_path, dep_folder)
            else:
                print(f"Unsupported archive format: {archive_file_name}")
                exit(1)

            # Delete the archive file after extracting
            os.remove(file_path)

            print(f"Latest release downloaded and extracted: {archive_file_name}")
        else:
            print(f"No matching release asset found for {os_type}")
    else:
        print(f"Failed to retrieve release information. Status code: {response.status_code}")

def extract_zip_archive(archive_file, extraction_path):
    with zipfile.ZipFile(archive_file, "r") as zip_ref:
        zip_ref.extractall(extraction_path)

def extract_tar_archive(archive_file, extraction_path):
    with tarfile.open(archive_file, "r:gz") as tar_ref:
        tar_ref.extractall(extraction_path)

if __name__ == "__main__":
    download_latest_release()
