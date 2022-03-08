from django.db import models


class Conference(models.Model):
    name = models.CharField(max_length=500)
    date = models.IntegerField()
    month = models.CharField(max_length=10)
    year = models.CharField(max_length=10)
    info = models.TextField(null=True)
    website = models.CharField(max_length=500)
    address = models.CharField(max_length=1000)
    image = models.CharField(max_length=500, null=True)
    saves = models.IntegerField(default=0)
    
class Users(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, null=True)
    contactno = models.IntegerField(null=True)
    user_type = models.CharField(max_length=50, null=True)
    password = models.CharField(max_length=100)
    organization_name = models.CharField(max_length=100, null=True)
    profession = models.CharField(max_length=100,null=True)
    city = models.CharField(max_length=50,null=True)
    state = models.CharField(max_length=50, null=True)
    country = models.CharField(max_length=50, null=True)
    skills = models.CharField(max_length=500,null=True)
    description = models.CharField(max_length=200, null=True)
    languages = models.CharField(max_length=200, null=True)
    profile_pic = models.CharField(max_length=200,null=True)
    scholar = models.CharField(max_length=500, null=True)
    orchid = models.CharField(max_length=200, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at  = models.DateTimeField(null=True)


class ResearchPapers(models.Model):
    title = models.CharField(max_length=500)
    abstract = models.TextField()
    collab_ids = models.CharField(max_length=500, null=True)
    conference_name = models.CharField(max_length=200,null=True)
    journal_name = models.CharField(max_length=200,null=True)
    domain = models.CharField(max_length=200, null=True)
    keywords = models.TextField(null=True)
    doi = models.CharField(max_length=300,null=True)
    media = models.CharField(max_length=100,null=True)
    published_date = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Saved(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    conference_id = models.ForeignKey(Conference, on_delete=models.CASCADE)

class Threads(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    research_id = models.ForeignKey(ResearchPapers, on_delete=models.CASCADE)
    reply_id = models.IntegerField()
    content = models.TextField()
    upvotes = models.IntegerField()
    media = models.CharField(null=True,max_length=200)
    is_viewed = models.BinaryField()
    timestamp = models.DateTimeField(auto_now_add=True)

class WorkExp(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    organization = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    employment_type = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    media = models.CharField(max_length=200,null=True)
    description = models.TextField(null=True)
    ongoing = models.BinaryField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField(null=True)

class Education(models.Model):
    user_id= models.ForeignKey(Users, on_delete=models.CASCADE)
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    grade = models.CharField(max_length=200,null=True)
    description = models.TextField(null=True)
    media = models.CharField(max_length=200,null=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

class Certification(models.Model):
    user_id= models.ForeignKey(Users, on_delete=models.CASCADE)
    course_name = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    link = models.TextField(null=True)
    credential_id = models.CharField(max_length=200,null=True)
    completition_date = models.DateTimeField()

class UserResearch(models.Model):
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    research_id = models.ForeignKey(ResearchPapers, on_delete=models.CASCADE)


    