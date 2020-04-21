import { Entity, IsText, MinLength, IsRequired, Description } from "helion-ui-forms";

@Entity({ artifactName: 'login' })
export class LoginData {

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

}