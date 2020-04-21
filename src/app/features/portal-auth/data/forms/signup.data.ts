import { Entity, IsText, MinLength, IsRequired, Description } from "helion-ui-forms";

@Entity({ artifactName: 'signup' })
export class SignupData {

    @IsText()
    @MinLength(7)
    @Description("User Name")
    @IsRequired()
    userName: string

    @IsText()
    @MinLength(7)
    @Description("Password")
    @IsRequired()
    password: string

    @IsText()
    @MinLength(7)
    @Description("Confirm Password")
    @IsRequired()
    passwordConfirm: string

    @IsText()
    @MinLength(7)
    @Description("Email")
    @IsRequired()
    emailAddress: string

    @IsText()
    @Description("CAPTCHA")
    captcha: string

    tokenId: string;

    tokenNonce: string;

}