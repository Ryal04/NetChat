using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("1ef8db00-c83d-410c-b0d7-9f139c9a51db"), "Canal de DotNetCore", "DotNetCore" });

            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("d2232940-677e-4efd-892c-338d837cbd64"), "Canal de Angular", "Angular" });

            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("43f9c002-865f-4236-8048-db8f6b57e856"), "Canal de ReactJs", "ReactJs" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("1ef8db00-c83d-410c-b0d7-9f139c9a51db"));

            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("43f9c002-865f-4236-8048-db8f6b57e856"));

            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("d2232940-677e-4efd-892c-338d837cbd64"));
        }
    }
}
