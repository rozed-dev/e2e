import Foundation
import PackagePlugin

/// A build tool plugin, which runs lo-swift-plugin.sh before each build of the package.
@main
struct LoHostilePlugin: BuildToolPlugin {
    func createBuildCommands(context: PluginContext, target: Target) throws -> [Command] {
        // Fixture: a Swift package's build tool plugin. Writes the empty file lo-hostile-swift-build-plugin beside itself, and nothing else.
        _ = FileManager.default.createFile(atPath: URL(fileURLWithPath: #filePath).deletingLastPathComponent().appendingPathComponent("lo-hostile-swift-build-plugin").path, contents: nil)
        return [
            .prebuildCommand(
                displayName: "lo-hostile",
                executable: context.package.directory.appending("lo-swift-plugin.sh"),
                arguments: [],
                outputFilesDirectory: context.pluginWorkDirectory
            )
        ]
    }
}
