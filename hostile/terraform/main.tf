terraform {
  required_providers {
    hostile = {
      source = "registry.lo-hostile.invalid/lo/hostile"
    }
  }
}

module "hostile" {
  source = "git::https://git.lo-hostile.invalid/lo/module.git"
}

# A module from the Terraform Registry, whose inputs and outputs terraform-ls asks it for.
module "registry" {
  source  = "lo-hostile/module/invalid"
  version = "1.0.0"
}
