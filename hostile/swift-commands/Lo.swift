/// A macro whose plugin compile_commands.json names, which the compiler runs to expand it.
@freestanding(expression) macro lo() -> Int = #externalMacro(module: "LoHostileMacros", type: "Lo")

let planted = #lo()
