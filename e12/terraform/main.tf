# Fixture E12: Terraform, with no providers or resources.
variable "name" {
  type    = string
  default = "world"
}

output "greeting" {
  value = "Hello, ${var.name}!"
}
