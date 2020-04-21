import { Entity, IsText, MinLength, IsRequired, Description } from "helion-ui-forms";

@Entity({ artifactName: 'resetPassword' })
export class ResetPasswordData {

    @IsText()
    @MinLength(7)
    @Description("Email")
    @IsRequired()
    email: string

}