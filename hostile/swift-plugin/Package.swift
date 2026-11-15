// swift-tools-version: 5.9
import Foundation
import PackageDescription

// Fixture: a Swift package's manifest, which SwiftPM runs to read. Writes the empty file lo-hostile-swift-plugin-manifest beside itself, and nothing else.
_ = FileManager.default.createFile(atPath: URL(fileURLWithPath: #filePath).deletingLastPathComponent().appendingPathComponent("lo-hostile-swift-plugin-manifest").path, contents: nil)

let package = Package(
    name: "LoHostilePlugin",
    targets: [
        .executableTarget(name: "LoHostile", path: "Sources", plugins: ["LoHostilePlugin"]),
        .plugin(name: "LoHostilePlugin", capability: .buildTool(), path: "Plugins")
    ]
)
