function toggleSubMenu(menuIndex) {
    // 先隐藏所有子菜单
    var submenus = document.querySelectorAll('.submenu');
    submenus.forEach(function (submenu) {
        submenu.style.display = 'none';
    });

    // 显示当前点击的子菜单
    var submenu = document.getElementById('submenu' + menuIndex);
    submenu.style.display = 'block';
}