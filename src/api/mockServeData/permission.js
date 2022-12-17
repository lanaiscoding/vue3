import Mock from 'mockjs'
export default {
    getMenu: config => {
        const {
            username,
            password
        } = JSON.parse(config.body)
        //先判斯用户是否存在    
        //判断账号和密码是否对应
        if (username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    menu: [{
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'Home'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'Mall'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'User'
                        },
                        {
                            label: '其他',
                            name: 'others',
                            icon: 'location',
                            children: [{
                                    path: '/page1',
                                    name: 'page1',
                                    label: '页面1',
                                    icon: 'setting',
                                    url: 'PageOne'
                                },
                                {
                                    path: '/page2',
                                    name: 'page2',
                                    label: '页面2',
                                    icon: 'setting',
                                    url: 'PageTwo'
                                },
                            ]
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else if (username === 'visitor' && password === '123') {
            return {
                code: 20000,
                data: {
                    menu: [{
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'Home'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'Mall'
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }

            }
        } else {
            return {
                code: -999,
                data: {
                    message: '账号或密码不正确'
                }
            }
        }
    }
}