from django.db import models

import random
import string

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=24)
    description = models.TextField()
    code = models.CharField(max_length=20, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Histórico

    def generate_unique_code(self):
        code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=20))

        while Project.objects.filter(code=code).exists():
            code = ''.join(random.choices(string.ascii_uppercase + string.digits, k=20))
        return code

    def save(self, *args, **kwargs):
        if not self.code:
            self.code = self.generate_unique_code()

        super().save(*args, **kwargs)