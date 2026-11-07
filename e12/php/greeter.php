<?php
// Fixture E12: PHP.

final class Greeter
{
    public function __construct(private string $name, private bool $excited = false)
    {
    }

    public function greet(): string
    {
        return "Hello, {$this->name}" . ($this->excited ? "!!" : "!");
    }
}
