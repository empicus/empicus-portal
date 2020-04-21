import { Entity, IsText, Description, IsRequired } from "helion-ui-forms";

@Entity({ artifactName: 'contentDetailsForm' })
export class  ContentDetailsFormData  {

    @IsText()
    @Description("Writer Level")
    @IsRequired()
    writerLevel: string

    @IsText()
    @Description("Word Count")
    @IsRequired()
    wordCount: string

    @IsText()
    @Description("Source Count")
    @IsRequired()
    sourceCount: string

    @IsText()
    @Description("Paper Details")
    @IsRequired()
    paperDetails: string
}