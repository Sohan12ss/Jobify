using Microsoft.EntityFrameworkCore;    
using Properties.model.data;



var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(
            builder.Configuration.GetConnectionString("DefaultConnection")
        )
    ));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>{
    options.AddPolicy("AllowAngular",policy=>
    {
        policy.AllowAnyOrigin();
              policy.AllowAnyHeader();
              policy.AllowAnyMethod();
    });
});
 

var app = builder.Build();

app.UseSwagger();
app.UseCors("AllowAngular");
app.UseSwaggerUI();
app.MapControllers();
app.Run();

