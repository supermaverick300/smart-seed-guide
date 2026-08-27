# app/models/seed.py
from sqlalchemy import Float, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database.connection import Base


class Seed(Base):
    __tablename__ = "seeds"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String, nullable=False)
    variety: Mapped[str] = mapped_column(String, nullable=False)
    crop_id: Mapped[int] = mapped_column(ForeignKey("crops.id"), nullable=False)

    soil_type: Mapped[str] = mapped_column(String, nullable=False)
    water_requirement: Mapped[str] = mapped_column(String, nullable=False)
    min_temperature: Mapped[float] = mapped_column(Float, nullable=False)
    max_temperature: Mapped[float] = mapped_column(Float, nullable=False)
    maturity_days: Mapped[int] = mapped_column(Integer, nullable=False)
    disease_resistance: Mapped[str | None] = mapped_column(String, nullable=True)

    crop: Mapped["Crop"] = relationship(back_populates="seeds")