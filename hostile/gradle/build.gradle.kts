plugins {
    id("lo.hostile.plugin") version "1.0.0"
}

repositories {
    maven("https://gradle.lo-hostile.invalid/repository")
}

dependencies {
    implementation("lo.hostile:dependency:1.0.0")
}
