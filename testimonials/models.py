from django.db import models


class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    company = models.CharField(max_length=200, blank=True, null=True)
    content = models.TextField()
    avatar = models.ImageField(upload_to='testimonial_avatars/', blank=True, null=True)
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)], 
                                help_text="Rating from 1 to 5")
    is_active = models.BooleanField(default=True)
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} - {self.company}"