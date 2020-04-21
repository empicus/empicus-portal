import { Entity, IsText, Description, IsRequired } from "helion-ui-forms";

@Entity({ artifactName: 'academicInfoForm' })
export class  AcademicInfoFormData  {

    @IsText()
    @Description("Type Of Service")
    @IsRequired()
    typeOfService: string

    @IsText()
    @Description("Academic Level")
    @IsRequired()
    academicLevel: string

    @IsText()
    @Description("Deadline")
    @IsRequired()
    deadLine: string
}