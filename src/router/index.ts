import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/themes'
import DocsLayout from '@/docs/DocsLayout.vue'
import { getCurrentUser } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'dashboard-overview-1',
          component: () => import('../views/DashboardOverview1.vue'),
        },
        {
          path: 'dashboard-overview-2',
          name: 'dashboard-overview-2',
          component: () => import('../views/DashboardOverview2.vue'),
        },
        {
          path: 'dashboard-overview-3',
          name: 'dashboard-overview-3',
          component: () => import('../views/DashboardOverview3.vue'),
        },
        {
          path: 'dashboard-overview-4',
          name: 'dashboard-overview-4',
          component: () => import('../views/DashboardOverview4.vue'),
        },
        {
          path: 'categories',
          name: 'categories',
          component: () => import('../views/Categories.vue'),
        },
        {
          path: 'add-product',
          name: 'add-product',
          component: () => import('../views/AddProduct.vue'),
        },
        {
          path: 'product-list',
          name: 'product-list',
          component: () => import('../views/ProductList.vue'),
        },
        {
          path: 'product-grid',
          name: 'product-grid',
          component: () => import('../views/ProductGrid.vue'),
        },
        {
          path: 'transaction-list',
          name: 'transaction-list',
          component: () => import('../views/TransactionList.vue'),
        },
        {
          path: 'transaction-detail',
          name: 'transaction-detail',
          component: () => import('../views/TransactionDetail.vue'),
        },
        {
          path: 'seller-list',
          name: 'seller-list',
          component: () => import('../views/SellerList.vue'),
        },
        {
          path: 'seller-detail',
          name: 'seller-detail',
          component: () => import('../views/SellerDetail.vue'),
        },
        {
          path: 'reviews',
          name: 'reviews',
          component: () => import('../views/Reviews.vue'),
        },
        {
          path: 'inbox',
          name: 'inbox',
          component: () => import('../views/Inbox.vue'),
        },
        {
          path: 'file-manager',
          name: 'file-manager',
          component: () => import('../views/FileManager.vue'),
        },
        {
          path: 'point-of-sale',
          name: 'point-of-sale',
          component: () => import('../views/PointOfSale.vue'),
        },
        {
          path: 'chat',
          name: 'chat',
          component: () => import('../views/Chat.vue'),
        },
        {
          path: 'post',
          name: 'post',
          component: () => import('../views/Post.vue'),
        },
        {
          path: 'crud-data-list',
          name: 'crud-data-list',
          component: () => import('../views/CrudDataList.vue'),
        },
        {
          path: 'crud-form',
          name: 'crud-form',
          component: () => import('../views/CrudForm.vue'),
        },
        {
          path: 'users-layout-1',
          name: 'users-layout-1',
          component: () => import('../views/UsersLayout1.vue'),
        },
        {
          path: 'users-layout-2',
          name: 'users-layout-2',
          component: () => import('../views/UsersLayout2.vue'),
        },
        {
          path: 'users-layout-3',
          name: 'users-layout-3',
          component: () => import('../views/UsersLayout3.vue'),
        },
        {
          path: 'profile-overview-1',
          name: 'profile-overview-1',
          component: () => import('../views/ProfileOverview1.vue'),
        },
        {
          path: 'profile-overview-2',
          name: 'profile-overview-2',
          component: () => import('../views/ProfileOverview2.vue'),
        },
        {
          path: 'profile-overview-3',
          name: 'profile-overview-3',
          component: () => import('../views/ProfileOverview3.vue'),
        },
        {
          path: 'wizard-layout-1',
          name: 'wizard-layout-1',
          component: () => import('../views/WizardLayout1.vue'),
        },
        {
          path: 'wizard-layout-2',
          name: 'wizard-layout-2',
          component: () => import('../views/WizardLayout2.vue'),
        },
        {
          path: 'wizard-layout-3',
          name: 'wizard-layout-3',
          component: () => import('../views/WizardLayout3.vue'),
        },
        {
          path: 'blog-layout-1',
          name: 'blog-layout-1',
          component: () => import('../views/BlogLayout1.vue'),
        },
        {
          path: 'blog-layout-2',
          name: 'blog-layout-2',
          component: () => import('../views/BlogLayout2.vue'),
        },
        {
          path: 'blog-layout-3',
          name: 'blog-layout-3',
          component: () => import('../views/BlogLayout3.vue'),
        },
        {
          path: 'pricing-layout-1',
          name: 'pricing-layout-1',
          component: () => import('../views/PricingLayout1.vue'),
        },
        {
          path: 'pricing-layout-2',
          name: 'pricing-layout-2',
          component: () => import('../views/PricingLayout2.vue'),
        },
        {
          path: 'invoice-layout-1',
          name: 'invoice-layout-1',
          component: () => import('../views/InvoiceLayout1.vue'),
        },
        {
          path: 'invoice-layout-2',
          name: 'invoice-layout-2',
          component: () => import('../views/InvoiceLayout2.vue'),
        },
        {
          path: 'faq-layout-1',
          name: 'faq-layout-1',
          component: () => import('../views/FaqLayout1.vue'),
        },
        {
          path: 'faq-layout-2',
          name: 'faq-layout-2',
          component: () => import('../views/FaqLayout2.vue'),
        },
        {
          path: 'faq-layout-3',
          name: 'faq-layout-3',
          component: () => import('../views/FaqLayout3.vue'),
        },
        {
          path: 'update-profile',
          name: 'update-profile',
          component: () => import('../views/UpdateProfile.vue'),
        },
        {
          path: 'change-password',
          name: 'change-password',
          component: () => import('../views/ChangePassword.vue'),
        },
        {
          path: '/',
          component: DocsLayout,
          children: [
            // Documentation
            {
              path: "accordion",
              name: "accordion",
              component: () => import("../docs/pages/accordion.vue"),
            },
            {
              path: "alert",
              name: "alert",
              component: () => import("../docs/pages/alert.vue"),
            },
            {
              path: "avatar",
              name: "avatar",
              component: () => import("../docs/pages/avatar.vue"),
            },
            {
              path: "badge",
              name: "badge",
              component: () => import("../docs/pages/badge.vue"),
            },
            {
              path: "box",
              name: "box",
              component: () => import("../docs/pages/box.vue"),
            },
            {
              path: "breadcrumb",
              name: "breadcrumb",
              component: () => import("../docs/pages/breadcrumb.vue"),
            },
            {
              path: "button",
              name: "button",
              component: () => import("../docs/pages/button.vue"),
            },
            {
              path: "carousel",
              name: "carousel",
              component: () => import("../docs/pages/carousel.vue"),
            },
            {
              path: "chart",
              name: "chart",
              component: () => import("../docs/pages/chart.vue"),
            },
            {
              path: "checkbox",
              name: "checkbox",
              component: () => import("../docs/pages/checkbox.vue"),
            },
            {
              path: "combobox",
              name: "combobox",
              component: () => import("../docs/pages/combobox.vue"),
            },
            {
              path: "data-table",
              name: "data-table",
              component: () => import("../docs/pages/data-table.vue"),
            },
            {
              path: "datepicker",
              name: "datepicker",
              component: () => import("../docs/pages/datepicker.vue"),
            },
            {
              path: "dialog",
              name: "dialog",
              component: () => import("../docs/pages/dialog.vue"),
            },
            {
              path: "field",
              name: "field",
              component: () => import("../docs/pages/field.vue"),
            },
            {
              path: "input",
              name: "input",
              component: () => import("../docs/pages/input.vue"),
            },
            {
              path: "map",
              name: "map",
              component: () => import("../docs/pages/map.vue"),
            },
            {
              path: "menu",
              name: "menu",
              component: () => import("../docs/pages/menu.vue"),
            },
            {
              path: "native-select",
              name: "native-select",
              component: () => import("../docs/pages/native-select.vue"),
            },
            {
              path: "pagination",
              name: "pagination",
              component: () => import("../docs/pages/pagination.vue"),
            },
            {
              path: "popover",
              name: "popover",
              component: () => import("../docs/pages/popover.vue"),
            },
            {
              path: "progress-circular",
              name: "progress-circular",
              component: () => import("../docs/pages/progress-circular.vue"),
            },
            {
              path: "progress-linear",
              name: "progress-linear",
              component: () => import("../docs/pages/progress-linear.vue"),
            },
            {
              path: "radio-group",
              name: "radio-group",
              component: () => import("../docs/pages/radio-group.vue"),
            },
            {
              path: "scroll-area",
              name: "scroll-area",
              component: () => import("../docs/pages/scroll-area.vue"),
            },
            {
              path: "select",
              name: "select",
              component: () => import("../docs/pages/select.vue"),
            },
            {
              path: "sheet",
              name: "sheet",
              component: () => import("../docs/pages/sheet.vue"),
            },
            {
              path: "slider",
              name: "slider",
              component: () => import("../docs/pages/slider.vue"),
            },
            {
              path: "slot",
              name: "slot",
              component: () => import("../docs/pages/slot.vue"),
            },
            {
              path: "switch",
              name: "switch",
              component: () => import("../docs/pages/switch.vue"),
            },
            {
              path: "table",
              name: "table",
              component: () => import("../docs/pages/table.vue"),
            },
            {
              path: "tabs",
              name: "tabs",
              component: () => import("../docs/pages/tabs.vue"),
            },
            {
              path: "textarea",
              name: "textarea",
              component: () => import("../docs/pages/textarea.vue"),
            },
            {
              path: "toast",
              name: "toast",
              component: () => import("../docs/pages/toast.vue"),
            },
            {
              path: "tooltip",
              name: "tooltip",
              component: () => import("../docs/pages/tooltip.vue"),
            },
          ]
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue'),
    },
    {
      path: '/error-page',
      name: 'error-page',
      component: () => import('../views/ErrorPage.vue'),
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const currentUser = await getCurrentUser()
  const isAuthRoute = to.name === 'login' || to.name === 'register'
  const isPublicRoute = isAuthRoute || to.name === 'error-page'

  if (!currentUser && !isPublicRoute) {
    // Block unauthenticated user from dashboard routes and kick to login
    next({
      name: 'login',
      query: to.fullPath && to.fullPath !== '/' ? { redirect: to.fullPath } : undefined,
    })
  } else if (currentUser && isAuthRoute) {
    // Authenticated user forced to dashboard if visiting login/register
    next({ path: '/' })
  } else {
    next()
  }
})

export default router
