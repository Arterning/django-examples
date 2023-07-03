import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport-local'
import { AuthService } from './auth.service'


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super()
    }

    /**
     * Passport 定义的 所有策略 都是将validate() 方法执行的结果作为 user 属性存储在当前 HTTP Request 对象 上
     * @param username 
     * @param password 
     * @returns 
     */
    async validate(username: string, password: string) {
        const user = await this.authService.validateUser(username, password)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user
    }
    
}
