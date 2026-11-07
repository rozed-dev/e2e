# Fixture E12: Terraform, with no providers or resources.
variable "name" {
  type    = string
  default = "world"
}

variable "excited" {
  type    = bool
  default = false
}

output "greeting" {
  value = var.excited ? "Hello, ${var.name}!!" : "Hello, ${var.name}!"
}
