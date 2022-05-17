import { ApiModelProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEmail } from 'class-validator'

export class LoginUserDto {
	@ApiModelProperty({
		default: 'trinhchin.innos@gmail.com',
		example: 'trinhchin.innos@gmail.com',
		description: 'The email of the User'
	})
	@IsEmail()
	@IsNotEmpty()
	readonly email: string

	@ApiModelProperty({
		default: '0',
		example: '0',
		description: 'The password of the User'
	})
	@IsNotEmpty()
	readonly password: string
}
