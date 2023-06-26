import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../../feature/user/user.module';
import { AuthService } from './auth.service';
import { AuthStrategy } from './auth.strategy';

/**
 * nestjs的IOC设计类似于guice框架
 * 肯定是参考了他的设计
 * 包括关键字module provide等等
 * 现在理解module应该比较容易了 就是一个提供了provider的IOC小容器
 * APP Module再把这些小容器打包起来 是最大的那个容器
 * 所以和Guice很相像
 * 
 * 其实这种细粒度的Bean控制 在springboot中也有体现
 * 也就是定义一个Configuration类 在这个Configuration类中定义返回Bean的方法
 * 也相当于一个小Module了
 * 
 * springboot的自动配置就是基于一个个小的module最后汇聚在一起
 */
@Module({
    imports: [
        JwtModule.register({    // 向 nest 容器注册 jwt 模块，并配置密钥和令牌有效期
            secretOrPrivateKey: 'secretKey',
            signOptions: {
                expiresIn: 3600
            }
        }),
        forwardRef(() => UserModule)    // 处理模块间的循环依赖
    ],
    providers: [AuthService, AuthStrategy],
    exports: [AuthService]  // 导出 AuthServie 供 UserModule 使用
})
export class AuthModule { }