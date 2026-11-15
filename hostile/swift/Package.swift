// swift-tools-version: 5.9
import Foundation
import PackageDescription

// Fixture: a Swift package's manifest, which SwiftPM runs to read. Writes the empty file lo-hostile-swift-manifest beside itself, and nothing else.
_ = FileManager.default.createFile(atPath: URL(fileURLWithPath: #filePath).deletingLastPathComponent().appendingPathComponent("lo-hostile-swift-manifest").path, contents: nil)

let package = Package(
    name: "Hostile",
    dependencies: [
        .package(url: "https://swift.lo-hostile.invalid/lo/dependency.git", from: "1.0.0")
    ],
    targets: [
        .executableTarget(
            name: "Hostile",
            dependencies: [.product(name: "Dependency", package: "dependency")],
            path: "Sources"
        )
    ]
)
