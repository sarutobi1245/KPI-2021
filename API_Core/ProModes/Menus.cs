// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;

namespace ProModes
{
    public partial class Menus
    {
        public Menus()
        {
            MenuLangs = new HashSet<MenuLangs>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public string FontAwesome { get; set; }
        public string BackgroudColor { get; set; }
        public int Permission { get; set; }
        public int ParentId { get; set; }
        public int Position { get; set; }

        public virtual ICollection<MenuLangs> MenuLangs { get; set; }
    }
}