<template>
  <div class="sidebar d-flex">
        <div class="mobile-sidebar d-flex justify-content-between align-items-center d-md-none" :class="{active: isClicked}">
            <div class="mobile-logo">
                <img src="@/assets/images/logo/logo.svg" alt="Gamin Logo">
            </div>

            <div class="menu-toggle" :class="{active: isClicked}" @click="toggleMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
        <div class="sidebar-contents" :class="{active: isClicked}">
            <div class="sidebar-logo mb-3">
                <img src="@/assets/images/logo/logo.svg" alt="Gamin Logo">
            </div>
            <div class="sidebar-routes">
                <ul class="route-list">
                    <router-link v-for="(route, i) in routes" :key="'route-'+i" :to="route.path" class="route-link">
                        <li class="route-item">
                                {{ route.name }}
                        </li>
                    </router-link>
                    <slot name="category"/>
                </ul>
            </div>
        </div>
      <div class="content">
        <slot name="content"/>
      </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: 'SidebarComp',
    data() {
        return {
            routes: [
                {
                    name: 'Home',
                    path: '/',
                },
                {
                    name: 'Explore',
                    path: '/explore',
                },
                {
                    name: 'PC Games',
                    path: '/pc-games',
                },
                {
                    name: 'Browser Games',
                    path: '/browser-games',
                },
                {
                    name: 'Category List',
                    path: '/category',
                },
            ]
        }
    },
    setup() {
        const isClicked = ref(false)

        const toggleMenu = () => {
            if(!isClicked.value) {
                isClicked.value = true
            } else {
                isClicked.value = false
            }
        }

        return {
            isClicked,
            toggleMenu
        }
    }
}
</script>

<style>
.sidebar {
    width: 100%;
    height: 100%;
    min-height: 100vh;
}

.mobile-sidebar {
    display: none;
}

.sidebars {
    width: 100%;
}

.sidebar-contents {
    width: 25%;
    height: 100vh;
    background: var(--sidebar-bg);
}

.sidebar-logo {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sidebar-logo img {
    transform: translateX(-5px);
}

.route-list {
    padding-left: 0;
    list-style: none;
}

.route-item {
    width: 100%;
    padding: 1rem;
    padding-left: 2rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.route-item:hover {
    background: var(--bg);
    color: var(--white);
}

.route-link {
    text-decoration: none;
}

.router-link-exact-active > .route-item {
    background: var(--bg);
    color: var(--white);
}

.content {
    padding: 1rem;
    background: var(--bg);
}

@media screen and (max-width: 768px) {
    .mobile-sidebar {
        width: 100%;
        height: 70px;
        background: var(--sidebar-bg);
        position: fixed;
        top: 0;
        padding: 0.5rem;
        padding-right: 1rem;
        z-index: 1000;
        transition: 0.35s ease-in-out;
    }

    .mobile-sidebar.active {
        height: 115px;
    }

    .menu-toggle {
        width: 28px;
        height: 25px;
        margin-top: -0.5rem;
        cursor: pointer;
    }

    .menu-toggle .bar {
        width: 100%;
        height: 3px;
        display: block;
        background: var(--text-color);
        margin: 0.4rem 0;
        transition: all 0.35s ease-in-out;
    }

    .menu-toggle.active .bar:nth-child(1) {
        transform: rotate(45deg) translateY(0.8rem);
    }

    .menu-toggle.active .bar:nth-child(2) {
        transform: translateX(-3rem);
        opacity: 0;
    }

    .menu-toggle.active .bar:nth-child(3) {
        transform: rotate(-45deg) translateY(-0.9rem);
    }

    .menu-toggle:hover .bar {
        background: var(--white);
    }
    
    .sidebar-contents {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        height: 100%;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
        transition: all 0.35s ease-in-out;
    }

    .sidebar-contents.active {
        opacity: 1;
        visibility: visible;
        left: 0;
    }

    .content {
        padding: 1rem;
        padding-top: 5rem;
    }
}

@media screen and (min-width: 768px) {
    .mobile-sidebar {
        display: none;
    }

    .content {
        width: 100%;
        height: 100vh;
        overflow: auto;
        position: relative;
    }
}
</style>