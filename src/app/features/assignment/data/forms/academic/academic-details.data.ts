import { Entity, IsText, Description, IsRequired } from "helion-ui-forms";

@Entity({ artifactName: 'academicDetailsForm' })
export class  AcademicDetailsFormData  {

    @IsText()
    @Description("Topic")
    @IsRequired()
    title: string

    @IsText()
    @Description("Disciple")
    @IsRequired()
    disciple: string

    @IsText()
    @Description("Academic Style")
    @IsRequired()
    academicStyle: string

    @IsText()
    @Description("Writer Level")
    writerLevel: string
    
    @IsText()
    @Description("Source Count")
    @IsRequired()
    sourceCount: string

    @IsText()
    @Description("Line Spacing")
    @IsRequired()
    lineSpacing: string
    
    @IsText()
    @Description("Page Count")
    @IsRequired()
    pageCount: string
    
    @IsText()
    @Description("Paper Details")
    @IsRequired()
    paperDetails: string
}