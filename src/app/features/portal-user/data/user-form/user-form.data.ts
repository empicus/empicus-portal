import { Entity, IsText, MinLength, IsRequired, Description } from "helion-ui-forms";

@Entity({ artifactName: 'userForm' })
export class UserFormData {

    @IsText()
    @MinLength(7)
    @Description("Code")
    @IsRequired()
    code: string


    @IsText()
    @MinLength(7)
    @Description("Name")
    @IsRequired()
    name: string

}