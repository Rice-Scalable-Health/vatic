function Job(data)
{
    var me = this;

    this.slug = null;
    this.start = null;
    this.stop = null; 
    this.width = null; 
    this.height = null; 
    this.skip = null; 
    this.perobject = null;
    this.completion = null;
    this.blowradius = 5;// null;
    this.thisid = null;
    this.labels = null;
    this.homography = null;
    this.topimageurl = null;
    this.nextid = null;
    this.onlinetrackers = [];
    this.bidirectionaltrackers = [];
    this.multiobjecttrackers = [];
    this.pointmode = null;
    this.attributes = null;
    this.contextframes = 20; //20 frames of context - 10 frames before and 10 frames after the frame to be labeled for context
    this.frameurl = function(i)
    {
        folder1 = parseInt(Math.floor(i / 100));
        folder2 = parseInt(Math.floor(i / 10000));
        //return "frames/" + me.slug + 
        //    "/" + folder2 + "/" + folder1 + "/" + parseInt(i) + ".jpg";
        return "frames/" + me.slug + 
            "/" + folder2 + "/" + folder1 + "/" + parseInt(i) + ".png";
    }
}

function job_import(data)
{
    var job = new Job();
    job.slug = data["slug"];
    job.start = parseInt(data["start"]);
    job.stop = parseInt(data["stop"]); //Subtracted 2 here to prevent overlap. May need to delete that once overlap param is set to zero at the start. Or tweak code in cli.py to set overlap, or use --overlap -2 as the parameter
    job.width = parseInt(data["width"]);
    job.height = parseInt(data["height"]);
    job.skip = parseInt(data["skip"]);
    job.perobject = parseFloat(data["perobject"]);
    job.completion = parseFloat(data["completion"]);
    job.blowradius = 5;//5;//parseInt(data["blowradius"]);
    job.jobid = parseInt(data["jobid"]);
    job.labels = data["labels"];
    job.attributes = data["attributes"];
    job.training = parseInt(data["training"]);
    job.homography = data["homography"]
    job.topimageurl = "homographies/" + job.slug + "/topview.jpg";
    job.onlinetrackers = data["trackers"]["online"];
    job.bidirectionaltrackers = data["trackers"]["bidirectional"];
    job.multiobjecttrackers = data["trackers"]["multiobject"];
    job.nextid = parseInt(data["nextid"]);
    job.pointmode = parseInt(data["pointmode"]) ? true : false;

    console.log("Job configured!");
    console.log("  Slug: " + job.slug);
    console.log("  Start: " + job.start);
    console.log("  Stop: " + job.stop);
    console.log("  Width: " + job.width);
    console.log("  Height: " + job.height);
    console.log("  Skip: " + job.skip);
    console.log("  Per Object: " + job.perobject);
    console.log("  Blow Radius: " + job.blowradius);
    console.log("  Training: " + job.training);
    console.log("  Job ID: " + job.jobid);
    console.log("HERE!!!!");
    console.log("  Labels: ");
    for (var i in job.labels)
    {
        console.log("    " + i + " = " + job.labels[i]);
    }
    console.log("  Attributes:");
    for (var i in job.attributes)
    {
        for (var j in job.attributes[i])
        {
            console.log("    " + job.labels[i] + " = " + job.attributes[i][j])
        }
    }
    console.log(data);

    return job;
}
