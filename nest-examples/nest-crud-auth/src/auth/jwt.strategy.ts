import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { JWT_SECRET } from 'config'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET,
        })
    }

    /**
     * Passport 定义的 所有策略 都是将validate() 方法执行的结果作为 user 属性存储在当前 HTTP Request 对象 上
     * @param payload 
     * @returns 
     */
    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
    
}
