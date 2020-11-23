import {useRouter} from 'next/router'

export const links = [
    {name: 'Edit Profile', path: '/accounts/edit'},
    {name: 'Change Password', path: '/accounts/password/change'},
    {name: 'Emails & SMS', path: '#'},
    {name: 'Push Nitifications', path: '#'},
    {name: 'Manage Contacts', path: '/accounts/contacts'},
    {name: 'Account Informations', path: '#'},
    {name: 'Privacy & Security', path: '#'}
]

export const menuLink = [
    {iconName: 'home', name: 'Home', path: '/'},
    {iconName: 'setting', name: 'Settings', path: '/accounts/edit'},
    {iconName: 'users', name: 'Profile', path: '/user'},
    {iconName: 'cart', name: 'Cart', path: '/user/edit/cart'},
    {iconName: 'envelope', name: 'Messages', path: '/accounts/user/inbox'},
    {iconName: 'upload', name: 'Upload', path: '/accounts/upload'}
]
