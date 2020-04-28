import { Entity, IsText, MinLength, IsRequired, Description } from "helion-ui-forms";

@Entity({ artifactName: 'diseaseForm' })
export class DiseaseFormData {

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