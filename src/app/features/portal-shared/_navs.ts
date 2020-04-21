import { INavData } from "./data/nav.data";

export const sidebarNav: INavData[] = [

    {
        name: 'About Us',
        url: '/about',
        icon: 'fas fa-users',
        visibility: 'public'
    },
    {
        name: 'Services',
        url: '/dashboard',
        icon: 'fas fa-cogs',
        visibility: 'public'
    },
    {
        name: 'Blog',
        url: '/dashboard',
        icon: 'fas fa-rss',
        visibility: 'public'
    },
    {
        name: 'Questions',
        url: '/dashboard',
        icon: 'fas fa-database',
        visibility: 'public'
    },
    {
        name: 'Contact Us',
        url: '/dashboard',
        icon: 'fas fa-comments',
        visibility: 'public'
    },
    {
        name: 'Sign In',
        url: '/dashboard',
        icon: 'fas fa-user',
        visibility: 'guest'
    },
    {
        name: 'My Assignments',
        url: '/portal-academic',
        icon: 'fas fa-graduation-cap',
        visibility: 'user',
        children: [
            {
                name: 'Pending',
                url: '/portal-academic/pending',
                icon: 'fas fa-users',
                visibility: 'user'
            },
            {
                name: 'In Progress',
                url: '/portal-academic/inprogress',
                icon: 'fas fa-users',
                visibility: 'user'
            },
            {
                name: 'Completed',
                url: '/portal-academic/completed',
                icon: 'fas fa-users',
                visibility: 'user'
            },
        ]
    },
    {
        name: 'My Content',
        url: '/portal-content',
        icon: 'fas fa-file-alt',
        visibility: 'user',
        children: [
            {
                name: 'Pending',
                url: '/portal-content/pending',
                icon: 'fas fa-users',
                visibility: 'user'
            },
            {
                name: 'In Progress',
                url: '/portal-content/inprogress',
                icon: 'fas fa-users',
                visibility: 'user'
            },
            {
                name: 'Completed',
                url: '/portal-content/completed',
                icon: 'fas fa-users',
                visibility: 'user'
            },
        ]
    },
    /* 
    {
        name: 'Buttons',
        url: '/buttons',
        icon: 'fas fa-users',
        children: [
            {
                name: 'Buttons',
                url: '/buttons/buttons',
                icon: 'fas fa-users'
            },
            {
                name: 'Dropdowns',
                url: '/buttons/dropdowns',
                icon: 'fas fa-users'
            },
            {
                name: 'Brand Buttons',
                url: '/buttons/brand-buttons',
                icon: 'fas fa-users'
            }
        ]
    }, */
    {
        name: 'Payment Options',
        url: '/portal/payment-options',
        icon: 'fas fa-money-bill-alt',
        label: {
            variant: 'success',
            class: 'mt-auto'
        },
        attributes: { target: '_blank', rel: 'noopener' },
        visibility: 'public'
    },
    {
        name: 'Privacy Policy',
        url: '/about/policy',
        icon: 'fas fa-eye',
        label: {
            class: '',
            variant: 'danger',
        },
        attributes: { target: '_blank', rel: 'noopener' },
        visibility: 'public'
    }
]