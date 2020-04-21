import { Entity, IsText, Description } from "helion-ui-forms";

@Entity({ artifactName: 'academicOrderFormData' })
export class AcademicOrderFormData {
    @IsText()
    @Description("Type Of Service")
    typeOfService: string

    @IsText()
    @Description("Academic Level")
    academicLevel: string

    @IsText()
    @Description("Writer Level")
    writerLevel: string

    @IsText()
    @Description("Line Spacing")
    lineSpacing: string

    @IsText()
    @Description("Deadline")
    deadLine: string

    @IsText()
    @Description("No Of Pages")
    noOfPages: string

}