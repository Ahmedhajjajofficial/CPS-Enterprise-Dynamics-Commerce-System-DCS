{ pkgs, ... }: {
  channel = "stable-23.11";

  packages = [
    pkgs.git
    pkgs.gnumake
    pkgs.gcc
    pkgs.rustup
    pkgs.go
    pkgs.gopls
    pkgs.jdk17
    pkgs.gradle
    pkgs.python311
    pkgs.python311Packages.pip
    pkgs.python311Packages.virtualenv
    pkgs.nodejs_20
    pkgs.nodePackages.npm
    pkgs.nodePackages.typescript-language-server
    pkgs.flutter
    pkgs.dart
    pkgs.protobuf
    pkgs.protoc-gen-go
    pkgs.protoc-gen-go-grpc
    pkgs.sqlite
    pkgs.curl
    pkgs.httpie
  ];

  env = {
    JAVA_HOME = "${pkgs.jdk17}";
    GOROOT = "${pkgs.go}/share/go";
    GOPATH = "$HOME/go";
    PYTHONPATH = "./cps-enterprise-dcs/local-agent/src";
  };

  idx = {
    extensions = [
      "rust-lang.rust-analyzer"
      "golang.go"
      "vscjava.vscode-java-pack"
      "ms-python.python"
      "Dart-Code.flutter"
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "OpenCode.opencode-ai-helper"
    ];

    workspace = {
      onCreate = ''
        rustup default stable
        rustup component add clippy rustfmt
        npm install -g npm@latest
        mkdir -p cps-enterprise-dcs/local-agent
        if [ -d "cps-enterprise-dcs/local-agent" ]; then
          cd cps-enterprise-dcs/local-agent && python3 -m venv .venv
          source .venv/bin/activate && pip install --upgrade pip
        fi
      '';
      onStart = ''
        git fetch --all
      '';
    };

    previews = {
      enable = true;
      previews = {
        admin-app = {
          command = ["npm" "run" "dev" "--prefix" "app" "--" "--port" "$PORT" "--host"];
          manager = "web";
        };
        pos-interface = {
          command = ["npm" "run" "dev" "--prefix" "cps-enterprise-dcs/pos-interface" "--" "--port" "$PORT" "--host"];
          manager = "web";
        };
      };
    };
  };
}
