variable "aws_region" {
	description = "aws region"
	type 	    = string
	default	    = "us-east-2"
}


variable "instance_type" {
  description = "EC2 Instance Type"
  type        = string
  default     = "t3.small"
}

variable "ami_id" {
  description = "Ubuntu 24.04 AMI"
  type        = string
}

variable "my_ip" {
  description = "Public IP allowed to SSH/Jenkins"
  type        = string
}

variable "key_name" {
  description = "AWS Key Pair"
  type        = string
}

variable "public_key_path" {
  description = "SSH Public Key"
  type        = string
}

variable "db_username" {
  default = "postgres"
}

variable "db_password" {
  sensitive = true
}
