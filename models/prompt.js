import {Schema,model,models} from 'mongoose';

const PromptSchema = new Schema({
  creator:{
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt:{
    type: String,
    required: [true, 'Prompt is requried.'],
  },
  tag:{
    type: String,
    require: [true, 'Tag is requried.']
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt;