class Photo < ApplicationRecord
  validates :title, presence: true

  validate :ensure_pic

  has_one_attached :pic

  def ensure_pic
    unless self.pic.attached?
      errors[:pic] << "Must be attached"
    end
  end

end

# asdf