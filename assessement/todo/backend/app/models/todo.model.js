module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    todo:String,
    description:String,
    deadlind: Date,
    priority:String,
    published:Boolean
  },
  {
    timestamps: true
  });

  schema.method("toJSON", function() {
    const { __v, _id,...object } = this.toObject();
    object.id = _id;
    return object;
    
})

const Todo = mongoose.model("Todo", schema);
return Todo;

};
