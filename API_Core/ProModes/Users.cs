﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace ProModes
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool State { get; set; }
        public int LevelId { get; set; }
        public int Role { get; set; }
        public int TeamId { get; set; }
        public bool IsActive { get; set; }
        public string FullName { get; set; }
        public int Permission { get; set; }
        public string Email { get; set; }
        public string Skype { get; set; }
        public int Owner { get; set; }
        public string Alias { get; set; }
    }
}