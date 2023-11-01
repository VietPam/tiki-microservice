using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using OrderApi.Models;
using OrderApi.Services;

var builder = WebApplication.CreateBuilder(args);

//Add services to the container.
builder.Services.Configure<OrderDbSetting>(builder.Configuration.GetSection("OrderDatabaseSettings"));
builder.Services.AddSingleton<OrderServices>();

builder.Services.Configure<OrderItemDbSetting>(builder.Configuration.GetSection("OrderItemDatabaseSettings"));
builder.Services.AddSingleton<OrderItemServices>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
