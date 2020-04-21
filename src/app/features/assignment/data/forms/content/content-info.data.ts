import { Entity, IsText, Description, IsRequired } from "helion-ui-forms";

@Entity({ artifactName: 'contentInfoForm' })
export class  ContentInfoFormData  {

    @IsText()
    @Description("Content Type")
    @IsRequired()
    contentType: string

    @IsText()
    @Description("Title")
    @IsRequired()
    title: string

    @IsText()
    @Description("Keywords")
    keyWords: string

    @IsText()
    @Description("Deadline")
    @IsRequired()
    deadLine: string
}